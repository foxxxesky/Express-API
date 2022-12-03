module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profile_photo_path: {
            type: DataTypes.STRING,
            allowNull: true
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
            tableName: 'users'
        }
    );

    return User;
}