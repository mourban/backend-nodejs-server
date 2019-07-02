const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("prueba_tec_bd", "postgres", "Emuj636465", {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;