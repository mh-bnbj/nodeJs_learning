const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const Category = db.define(
  'category',
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'category',
    timestamps: false,
  }
)

module.exports = Category
