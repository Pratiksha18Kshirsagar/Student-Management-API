const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('student_management', 'root', 'Pratiksha@18', {
    host: 'localhost',
    dialect: 'mysql'
});


(
    async () => {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
)();

module.exports = sequelize;

























// const mysql = require('mysql2');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Pratiksha@18',
//     database: 'student_management'
// });


// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the MySQL database.');
// });



// module.exports = db;