const express = require('express');
const router = express.Router();
const { addStudent, getAllStudents, getStudentById, updateStudentById, deleteStudentById } = require('../controllers/studentController');

// Insert a new student
router.post('/addStudent', addStudent);

router.get('/', getAllStudents);

router.get('/:id', getStudentById);
router.put('/:id',  updateStudentById);

router.delete('/:id', deleteStudentById);

module.exports = router;