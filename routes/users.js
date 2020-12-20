/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-20 01:46:04
 * @modify date 2020-12-20 01:52:49
 * @desc [Routes for users]
 */

const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/users');
const multerUploads = require('../middlewares/multer');
 
// @route POST /register 
// @desc Register a user
router.post('/register', multerUploads, registerUser);

module.exports = router;