const Sequelize  = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({     
            userId : {
                type : Sequelize.INTEGER()
            },           
            name : {
                type : Sequelize.STRING(20)
            },
            position : {
                type : Sequelize.STRING(100)
            },
            email : {
                type : Sequelize.STRING(100)
            },
            github : {
                type : Sequelize.STRING(100)
            },
            insta : {
                type : Sequelize.STRING(100)
            },
            likelion : {
                type : Sequelize.STRING(100)
            },
            phone : {
                type : Sequelize.STRING(100)
            },
            profile : {
                type : Sequelize.STRING(100)
            },
		}, {
            sequelize,
            timestamps: false,
            modelName: 'User',
            tableName: 'Users',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db){
    
    }
};