/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-20 01:49:23
 * @modify date 2020-12-20 01:52:02
 * @desc [User's controller]
 */

 const multerUploads = require('../middlewares/multer');
 
 // @desc Controller for registering users 
 const registerUser = (req,res,next) => {
     console.log(req.file);
 }

module.exports.registerUser = registerUser;