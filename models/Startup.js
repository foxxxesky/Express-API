module.exports = (sequelize, DataTypes) => {
  const Startup = sequelize.define('Startup', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_batch: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    linkedin2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    linkedin3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    commitment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startup_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    founded: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    company_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    problem: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    problem_experience: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    problem_solve: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    problem_early_adopter: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    problem_early_adopter_location: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    problem_often_feel: {
      type: DataTypes.ENUM,
      values: ['Harian', 'Mingguan', 'Bulanan', 'Tahunan'],
      allowNull: false
    },
    problem_intense: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    solution: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    solution_exist: {
      type: DataTypes.ENUM,
      values: ['Ya', 'Tidak'],
      allowNull: false
    },
    solution_yes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    solution_no: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    solution_unique: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    solution_user: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    solution_feature: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    solution_tech: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    solution_tech_function: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    solution_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    solution_account: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    solution_password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traction_active_user: {
      type: DataTypes.ENUM,
      values: ['Ya', 'Tidak'],
      allowNull: false
    },
    traction_active_market: {
      type: DataTypes.ENUM,
      values: ['B2B', 'B2C', 'B2B2C', 'B2G', 'Others'],
      allowNull: true
    },
    traction_customer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traction_matric_primary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traction_matric_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traction_pm1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traction_pm2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traction_pm3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traction_pm4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traction_pm5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traction_pm6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traction_revenue: {
      type: DataTypes.ENUM,
      values: ['Ya', 'Tidak'],
      allowNull: true
    },
    traction_bm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    traction_gp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    other_indigo_reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    other_indigo_know: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    other_indigo_recomend: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    other_bootcamp_status: {
      type: DataTypes.ENUM,
      values: ['Ya', 'Tidak'],
      allowNull: false
    },
    other_bootcamp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pitchdeck: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  },
  {
    tableName: 'startups'
  })

  return Startup
}
