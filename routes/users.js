/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-20 01:46:04
 * @modify date 2020-12-20 03:29:33
 * @desc [Routes for users]
 */

const express = require('express');
const router = express.Router();
const {registerUser, getUserBySlug, getAllUsers} = require('../controllers/users');
const multerUploads = require('../middlewares/multer');
 
// @route POST /register 
// @desc Register a user
router.post('/register', multerUploads, registerUser);

// @route GET /users 
// @desc Get all users
router.get('/users', getAllUsers);
// @route GET /user/slug 
router.get('/users/:slug', getUserBySlug);

module.exports = router;