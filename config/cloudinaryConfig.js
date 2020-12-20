/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-20 01:32:49
 * @modify date 2020-12-20 01:35:34
 * @desc [Cloudinary Configuration file]
 */

 const {config, uploader} = require('cloudinary');

 const cloudinaryConfig = () => config({
     cloud_name : process.env.CLOUDINARY_CLOUD_NAME,

     api_key : process.env.CLOUDINARY_API_KEY, 

     api_secret : process.env.CLOUDINARY_API_SECRET
 })

 module.exports = {cloudinaryConfig, uploader};

 
