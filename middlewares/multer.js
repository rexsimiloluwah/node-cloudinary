/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-20 01:41:11
 * @modify date 2020-12-20 15:37:24
 * @desc [Multer Middleware]
 */

const multer = require('multer');
const HttpError = require('../HttpError');
const path = require('path');

const allowedExtensions = [".png", ".jpg", ".jpeg"];

// Multer configuration
const multerUpload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if(!allowedExtensions.includes(ext)){
            cb(new HttpError("File type is not supported.", 400), false);
            return;
        }

        cb(null, true);
    }
})

module.exports = multerUpload;
