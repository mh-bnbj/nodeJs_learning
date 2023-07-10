const { DataTypes } = require('sequelize')
const db = require('../configs/db')
const Category = require('./Category')

const Post = db.define(
  'post',
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    category_id: {
      type: DataTypes.NUMBER,
    },
  },
  {
    tableName: 'post',
    timestamps: false,
  }
)

Post.belongsTo(Category, {
  foreignKey: {
    name: 'category_id',
  },
})

module.exports = Post
