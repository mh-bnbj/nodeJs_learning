const { DataTypes } = require('sequelize')
const db = require('../configs/db')
const bcrypt = require('bcrypt')

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

User.validPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
}

User.encryptPassword = async (password) => {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)

    console.log('hash : ', hash)
    return hash
}

module.exports = User
