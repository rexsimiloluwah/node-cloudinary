/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-20 01:41:11
 * @modify date 2020-12-20 01:43:14
 * @desc [Multer Middleware]
 */

 const multer = require('multer');

 const storage = multer.memoryStorage();

 const uploads = multer({storage}).single('image');

 module.exports = uploads;
