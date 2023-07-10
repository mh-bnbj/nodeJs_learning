const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const User = db.define(
    'user',
    {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.NUMBER,
        },
    },
    {
        tableName: 'user',
        timestamps: false,
    }
)

module.exports = User
