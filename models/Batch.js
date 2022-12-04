'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Batch extends Model {
    static associate (models) {
      // define association here
    }
  }

  Batch.init(
    {
      name: DataTypes.STRING,
      start_date: DataTypes.DATEONLY,
      end_date: DataTypes.DATE,
      status: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Batch',
      tableName: 'batches'
    })

  return Batch
}
