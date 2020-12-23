/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-20 01:46:04
 * @modify date 2020-12-20 17:01:30
 * @desc [Routes for users]
 */

const express = require('express');
const router = express.Router();
const {registerUser, getUserBySlug, getAllUsers, updateUserBySlug, deleteUserBySlug} = require('../controllers/users');
const multerUpload = require('../middlewares/multer');
 
// @route POST /register 
// @desc Register a user
router.post('/user/register', multerUpload.single("image"), registerUser);

// @route GET /users 
// @desc Get all users
router.get('/users', getAllUsers);
// @route GET /user/slug 
router.get('/users/:slug', getUserBySlug);

// @route UPDATE /users/slug
router.put('/users/:slug', multerUpload.single("image"), updateUserBySlug);

// @route DELETE /users/slug
router.delete('/users/:slug', deleteUserBySlug);

module.exports = router;