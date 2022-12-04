'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class AdvanceTechnology extends Model {
    static associate (models) {
      // define association here
    }
  }

  AdvanceTechnology.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'AdvanceTechnology',
      tableName: 'advance_technologies'
    })

  return AdvanceTechnology
}
