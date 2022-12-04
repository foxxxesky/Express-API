'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Startup extends Model {
    static associate (models) {
      Startup.belongsTo(models.Category, {
        as: 'categories',
        foreignKey: 'id'
      })
    }
  }

  Startup.init(
    {
      id_user: DataTypes.INTEGER,
      id_batch: DataTypes.INTEGER,
      name: DataTypes.STRING,
      position: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      linkedin2: DataTypes.STRING,
      linkedin3: DataTypes.STRING,
      commitment: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      startup_name: DataTypes.STRING,
      founded: DataTypes.STRING,
      city: DataTypes.STRING,
      website: DataTypes.STRING,
      desc: DataTypes.TEXT,
      category_id: DataTypes.INTEGER,
      company_status: DataTypes.STRING,
      problem: DataTypes.TEXT,
      problem_experience: DataTypes.TEXT,
      problem_solve: DataTypes.TEXT,
      problem_early_adopter: DataTypes.TEXT,
      problem_early_adopter_location: DataTypes.TEXT,
      problem_often_feel: {
        type: DataTypes.ENUM,
        values: ['Harian', 'Mingguan', 'Bulanan', 'Tahunan']
      },
      problem_intense: DataTypes.TEXT,
      solution: DataTypes.TEXT,
      solution_exist: {
        type: DataTypes.ENUM,
        values: ['Ya', 'Tidak']
      },
      solution_yes: DataTypes.TEXT,
      solution_no: DataTypes.TEXT,
      solution_feature: DataTypes.TEXT,
      solution_tech: DataTypes.TEXT,
      solution_tech_function: DataTypes.TEXT,
      solution_link: DataTypes.TEXT,
      solution_account: DataTypes.TEXT,
      solution_password: DataTypes.TEXT,
      traction_active_user: {
        type: DataTypes.ENUM,
        values: ['Ya', 'Tidak']
      },
      traction_active_market: {
        type: DataTypes.ENUM,
        values: ['B2B', 'B2C', 'B2B2C', 'B2G', 'Others']
      },
      traction_customer: DataTypes.TEXT,
      traction_matric_primary: DataTypes.TEXT,
      traction_matric_reason: DataTypes.TEXT,
      traction_pm1: DataTypes.TEXT,
      traction_pm2: DataTypes.TEXT,
      traction_pm3: DataTypes.TEXT,
      traction_pm4: DataTypes.TEXT,
      traction_pm5: DataTypes.TEXT,
      traction_pm6: DataTypes.TEXT,
      traction_revenue: {
        type: DataTypes.ENUM,
        values: ['Ya', 'Tidak']
      },
      traction_bm: DataTypes.TEXT,
      traction_gp: DataTypes.TEXT,
      other_indigo_reason: DataTypes.TEXT,
      other_indigo_know: DataTypes.TEXT,
      other_indigo_recomend: DataTypes.TEXT,
      other_bootcamp_status: {
        type: DataTypes.ENUM,
        values: ['Ya', 'Tidak']
      },
      other_bootcamp: DataTypes.TEXT,
      pitchdeck: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Startup',
      tableName: 'startups'
    })

  return Startup
}
