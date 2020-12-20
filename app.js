const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cloudinary = require('cloudinary');
const path = require('path');
const HttpError = require("./HttpError");
const cors = require('cors');
require('dotenv').config();
const userRouter = require('./routes/users');

// Initialize the Express app 
const app = express();

// Middlewares and routes 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

// Routes 
app.use('/api/v1', userRouter);

app.use( (req, res, next) => {
    const error = new HttpError("Could not find specified route.", 500);
    throw error;
})

app.use( (error,req, res, next) => {
    if(res.headerSent){
        next(error);
    }

    return res.status(error.code || 500)
            .json({
                "message" : error.message || "An unknown error occurred."
            })
})

module.exports = app;