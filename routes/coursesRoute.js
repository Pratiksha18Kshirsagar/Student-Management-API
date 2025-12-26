const express = require('express');
const router = express.Router();
const { addCourse, addStudentToCourses } = require("../controllers/courseController");

// Insert a new student
router.post('/addCourse', addCourse);
router.post('/addStudentCourses', addStudentToCourses);



module.exports = router;