const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
    "task",
    {
        id_task: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
        description: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        status: {
            type: Sequelize.STRING
        },
        id_user: {
            type: Sequelize.UUID
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)