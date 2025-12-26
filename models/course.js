const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const courses = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
    {
        timestamps: false
    });

module.exports = courses;