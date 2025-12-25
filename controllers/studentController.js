const db = require('../utils/database');
const studentModel = require("../models/student")

// Insert a new student
exports.addStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const student = await studentModel.create({ name, email, age });
        res.status(200).json({ message: 'student Added successfully', student });
    } catch (error) {
        res.status(500).json({ error: "failed to add a student" });
    }
}


// Get all students 
exports.getAllStudents = async(req, res) => {
    try {
        const students =await studentModel.findAll();
        if(students.length == 0){
           return res.status(400).json({message:"no students found!"}) 
        }
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: "failed to get all students" });

    }
    // const query = 'SELECT * FROM students';
    // db.query(query, (err, results) => {
    //     if (err) {
    //         console.error('Error fetching students:', err);
    //         return res.status(500).json({ error: 'Failed to fetch students' });
    //     }
    //     res.status(200).json(results);
    // });
};


// Get a student by ID
exports.getStudentById = async(req, res) => {
    try {
       const id = req.params.id;
       const student = await studentModel.findByPk(id);
        if (!student) {
            return res.status(404).json({ message: "student not found" });
        }
        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({ error: "failed to get a student" });
    }
    
    
    // const query = 'SELECT * FROM students WHERE id = ?';
    // db.query(query, [studentId], (err, results) => {
    //     if (err) {
    //         console.error('Error fetching student:', err);
    //         return res.status(500).json({ error: 'Failed to fetch student' });
    //     }
    //     if (results.length === 0) {
    //         return res.status(404).json({ error: 'Student not found' });
    //     }
    //     res.status(200).json(results[0]);
    // });
};

// Update a student by ID
exports.updateStudentById = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const { id } = req.params;
        if (!name || !email || !age) {
            return res.status(400).json({ error: "Add the updated values" });
        }
        const student = await studentModel.findByPk(id);
        if (!student) {
            return res.status(404).json({ message: "student not found" });
        }
        student.name = name;
        student.email = email;
        student.age = age;
        await student.save();
        res.status(200).json({ message: "students updated successfully", student });
    } catch (error) {
        res.status(500).json({ error: "Couldnt update" });
    }
    // const studentId = req.params.id;
    // const { name, email,age } = req.body; 
    //  if(!name || !email || !age ){
    //   return  res.status(400).json({error:"Add the values!!"});
    // } 
    // const query = 'UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?';
    // db.query(query, [name, email,age ,studentId], (err, result) => {
    //     if (err) {
    //         console.error('Error updating student:', err);
    //         return res.status(500).json({ error: 'Failed to update student' });
    //     }
    //     if (result.affectedRows === 0) {
    //         return res.status(404).json({ error: 'Student not found' });
    //     }   
    //     res.status(200).json({ message: 'Student updated successfully' });
    // });
};


// Delete a student by ID
exports.deleteStudentById =async (req, res
) => {
    try {
        const id = req.params.id;
        const student = await studentModel.findByPk(id);
        if (!student) {
            return res.status(404).json({ message: "student not found" });
        }
        await student.destroy();
        res.status(200).json({message:"Deleted successfully"})
    } catch (error) {
        res.status(500).json({ message: "cannot delete" });
    }
    // const studentId = req.params.id;
    // const query = 'DELETE FROM students WHERE id = ?';
    // db.query(query, [studentId], (err, result) => {
    //     if (err) {
    //         console.error('Error deleting student:', err);
    //         return res.status(500).json({ error: 'Failed to delete student' });
    //     }   
    //     if (result.affectedRows === 0) {
    //         return res.status(404).json({ error: 'Student not found' });
    //     }   
    //     res.status(200).json({ message: 'Student deleted successfully' });
    // });
};


