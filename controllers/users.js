/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-20 01:49:23
 * @modify date 2020-12-20 17:09:09
 * @desc [User's controller]
 */

const multerUpload = require('../middlewares/multer');
const cloudinary = require('../config/cloudinaryConfig');
const db = require('../models');
const HttpError = require('../HttpError');
const slugify = require('slugify');
const Users = db.users;
const Op = db.Sequelize.Op;

 
// @desc Controller for registering users 
const registerUser = async (req,res,next) => {
    // console.log(req.file);
    // console.log(req.body);
    let result;
    if(req.file){
        try{
            // Upload image to cloudinary
            result = await cloudinary.uploader.upload(req.file.path);
            console.log(result)
        }
        catch(err){
            return res.status(500)
                    .json({
                        "message" : err
                    })
        }
    }

    const user = await Users.findAll({where : {email : req.body.email}});
    console.log(user)

    if(user.length > 0){
        return res.status(400)
                .json({
                    "message" : "User already exists !"
                })
    }

    const newUser = {
        name : req.body.name,
        email : req.body.email,
        university: req.body.university,
        linkedin : req.body.linkedin,
        twitter : req.body.twitter,
        slug : slugify(req.body.name).toLowerCase(),
        picture : result ? result.secure_url : ""
    }

    Users.create(newUser)
    .then(response => {
        console.log(response);
        res.status(201)
            .json({
                "message" : "New user successfully created."
            })
    })
    .catch(err => {
        console.error(err);
        next(new HttpError(err, 500));
    })
}

// @desc Controller for fetching all users
const getAllUsers = async (req, res, next) => {
    Users.findAll()
    .then(response => {
        console.log(response);
        res.status(200)
            .json({
                "message" : "Successfully fetched users.",
                "length" : response.length,
                "users" : response
            })
    })
    .catch(err => {
        console.error(err);
        next(new HttpError(err, 500));
    })
}

// @desc Controller for fetching user details 
const getUserBySlug = async (req, res, next) => {
    console.log(req.params.slug);

    Users.findAll({where : {slug : req.params.slug}})
    .then(response => {
        console.log(response[0].dataValues);
        res.status(200)
            .json({
                "message" : "Successfully fetched user",
                "user" : response[0]
            })
    })
    .catch(err => {
        console.log(err);
        next(new HttpError(`User not found for ${req.params.slug}.`))
    })
}

// @desc Controller for updating user details 
const updateUserBySlug = async (req, res, next) => {
    console.log(req.params.slug);

    const user = await Users.findAll({where : {slug : req.params.slug}});

    if(user.length === 0){
        return res.status(400)
            .json({
                "message" : "User not found."
            })
    }

    let result;
    if(req.file){
        try{
            // Upload image to cloudinary
            result = await cloudinary.uploader.upload(req.file.path);
            console.log(result)
        }
        catch(err){
            return res.status(500)
                    .json({
                        "message" : err
                    })
        }
    }

    const newData = {}
    for(const property in req.body){
        newData[property] = req.body[property];
    }
    if(newData.name){
        newData["slug"] = slugify(newData.name).toLowerCase();
    }
    if(result){
        newData['picture'] = result.secure_url;
    }

    Users.update(newData, {
            where : {slug : req.params.slug}
        })
        .then(response => {
            console.log(response);
            res.status(200)
            .json({
                "message" : "Successfully updated user"
            })
        })
        .catch(err => {
            console.error(err);
            next(new HttpError(err, 500));
        })


}

// @desc Controller for deleting existing user
const deleteUserBySlug = async (req, res, next) => {
    console.log(req.params.slug);

    const user = await Users.findAll({where : {slug : req.params.slug}});

    if(user.length === 0){
        return res.status(400)
            .json({
                "message" : "User not found."
            })
    }

    Users.destroy({
        where : {slug : req.params.slug}
    })
    .then(response => {
        console.log(response);
        res.status(200)
            .json({
                "message" : "User successfully deleted from Database."
            })
    })
    .catch(err => {
        console.error(err);
        next(new HttpError(err, 500));
    })
}

module.exports.registerUser = registerUser;
module.exports.getUserBySlug = getUserBySlug;
module.exports.getAllUsers = getAllUsers;
module.exports.updateUserBySlug = updateUserBySlug;
module.exports.deleteUserBySlug = deleteUserBySlug;