const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const StudentCourses = sequelize.define('StudentCourse', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
}, {
    timestamps: false
});

module.exports = StudentCourses;