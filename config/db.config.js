const dbConfig = {
    HOST : process.env.POSTGRES_HOST,
    USER : "postgres",
    PASSWORD : process.env.POSTGRES_PASSWORD,
    DB : process.env.POSTGRES_DBNAME,
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