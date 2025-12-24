const db = require('../utils/database');


// Insert a new student
exports.addStudent = (req, res) => {
    const { name,email,age} = req.body;  
    if(!name || !email || !age ){
      return  res.status(400).json({error:"Add the values!!"});
    }
    const query = 'INSERT INTO students (name, email,age) VALUES (?, ?, ?)';
    db.query(query, [name, email,age], (err, result) => {
        if (err) {  
            console.error('Error adding student:', err);
            return res.status(500).json({ error: 'Failed to add student' });
        }
        res.status(201).json({ message: 'Student added successfully', studentId: result.insertId });
    });
};


// Get all students 
exports.getAllStudents = (req, res) => {
    const query = 'SELECT * FROM students';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching students:', err);
            return res.status(500).json({ error: 'Failed to fetch students' });
        }
        res.status(200).json(results);
    });
};


// Get a student by ID
exports.getStudentById = (req, res) => {
    const studentId = req.params.id;
    const query = 'SELECT * FROM students WHERE id = ?';
    db.query(query, [studentId], (err, results) => {
        if (err) {
            console.error('Error fetching student:', err);
            return res.status(500).json({ error: 'Failed to fetch student' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(results[0]);
    });
};

// Update a student by ID
exports.updateStudentById = (req, res) => {
    const studentId = req.params.id;
    const { name, email,age } = req.body; 
     if(!name || !email || !age ){
      return  res.status(400).json({error:"Add the values!!"});
    } 
    const query = 'UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?';
    db.query(query, [name, email,age ,studentId], (err, result) => {
        if (err) {
            console.error('Error updating student:', err);
            return res.status(500).json({ error: 'Failed to update student' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }   
        res.status(200).json({ message: 'Student updated successfully' });
    });
};


// Delete a student by ID
exports.deleteStudentById = (req, res
) => {
    const studentId = req.params.id;
    const query = 'DELETE FROM students WHERE id = ?';
    db.query(query, [studentId], (err, result) => {
        if (err) {
            console.error('Error deleting student:', err);
            return res.status(500).json({ error: 'Failed to delete student' });
        }   
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }   
        res.status(200).json({ message: 'Student deleted successfully' });
    });
};


