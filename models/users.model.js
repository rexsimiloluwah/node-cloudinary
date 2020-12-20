const userModel = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        name : {
            type: Sequelize.STRING
        },
        email : {
            type : Sequelize.STRING
        },
        university : {
            type : Sequelize.STRING
        },
        linkedin : {
            type : Sequelize.STRING
        },
        twitter : {
            type : Sequelize.STRING
        },
        slug : {
            type : Sequelize.STRING
        },
        picture : {
            type : Sequelize.STRING
        }

    })

    return Users;
}

module.exports = userModel;