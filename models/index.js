/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-20 02:22:21
 * @modify date 2020-12-20 02:29:54
 * @desc [Sequelize connection with PostGreSQL]
 */

const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');
const usersModel = require('./users.model.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
     host : dbConfig.HOST, 
     dialect : dbConfig.dialect,
     operatorsAliases : false,

     pool : {
         max : dbConfig.pool.max,
         min : dbConfig.pool.min,
         idle : dbConfig.pool.idle,
         acquire : dbConfig.pool.acquire
     }
})

// Create the db object 
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = usersModel(sequelize, Sequelize);

module.exports = db

