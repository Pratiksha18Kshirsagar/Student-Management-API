const courseModel = require("../models/course");
const studentModel = require("../models/student");

exports.addCourse = async (req, res) => {
    try {
        const { name } = req.body;
        const course = await courseModel.create({ name });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: "Oops failed!!" });
    }
}


exports.addStudentToCourses = async (req, res) => {
    try {
       const {studentId,courseIds} = req.body;
       console.log(req.body);
       const student = await studentModel.findByPk(studentId);
       const course = await courseModel.findAll({where:{id:courseIds}});
       await student.addCourses(course);
       const updatedStudent = await student.findByPk(studentId,{include:course});
       res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: "Oops failed!!",error });

    }
}