'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('startups', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_batch: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false
      },
      linkedin: {
        type: Sequelize.STRING,
        allowNull: true
      },
      linkedin2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      linkedin3: {
        type: Sequelize.STRING,
        allowNull: true
      },
      commitment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      startup_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      founded: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      company_status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      problem: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      problem_experience: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      problem_solve: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      problem_early_adopter: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      problem_early_adopter_location: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      problem_often_feel: {
        type: Sequelize.ENUM,
        values: ['Harian', 'Mingguan', 'Bulanan', 'Tahunan'],
        allowNull: false
      },
      problem_intense: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      solution: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      solution_exist: {
        type: Sequelize.ENUM,
        values: ['Ya', 'Tidak'],
        allowNull: false
      },
      solution_yes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      solution_no: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      solution_unique: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      solution_user: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      solution_feature: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      solution_tech: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      solution_tech_function: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      solution_link: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      solution_account: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      solution_password: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      traction_active_user: {
        type: Sequelize.ENUM,
        values: ['Ya', 'Tidak'],
        allowNull: false
      },
      traction_active_market: {
        type: Sequelize.ENUM,
        values: ['B2B', 'B2C', 'B2B2C', 'B2G', 'Others'],
        allowNull: true
      },
      traction_customer: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      traction_matric_primary: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      traction_matric_reason: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      traction_pm1: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      traction_pm2: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      traction_pm3: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      traction_pm4: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      traction_pm5: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      traction_pm6: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      traction_revenue: {
        type: Sequelize.ENUM,
        values: ['Ya', 'Tidak'],
        allowNull: true
      },
      traction_bm: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      traction_gp: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      other_indigo_reason: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      other_indigo_know: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      other_indigo_recomend: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      other_bootcamp_status: {
        type: Sequelize.ENUM,
        values: ['Ya', 'Tidak'],
        allowNull: false
      },
      other_bootcamp: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      pitchdeck: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('startups')
  }
}
