const studentModel = require("../models/student");
const courseModel = require("../models/course");
const studentCourseModel = require("../models/studentCourses");


studentModel.belongsToMany(courseModel,{through:studentCourseModel});
courseModel.belongsToMany(studentModel, { through: studentCourseModel });


module.exports = {studentModel, courseModel,studentCourseModel};

