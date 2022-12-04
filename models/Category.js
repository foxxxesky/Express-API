'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate (models) {
      Category.hasMany(models.Startup, {
        foreignKey: 'category_id'
      })
    }
  }

  Category.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'categories'
    })

  return Category
}
