const dbConfig = {
    HOST : "localhost",
    USER : "postgres",
    PASSWORD : "adetoyosi",
    DB : "nodecloudinaryusers",
    dialect : "postgres",
    // Pool is optional - For Sequelize connection pool
    pool : {
        max : 5,
        min : 0,
        acquire : 3000,
        idle : 1000
    }
}

module.exports = dbConfig;