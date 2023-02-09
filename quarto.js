const Sequelize = require ('sequelize');
const database = require ('./db');

const Quarto = database.define('quarto',{
    numeroQuarto:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    idquarto:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    numeroDoPredio: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
    });

    module.exports = Quarto;