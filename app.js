const express = require('express');
const app = express();
const port = 3000;
const studentRoutes = require('./routes/studentRoutes');
const coursesRoutes = require('./routes/coursesRoute');
const sequelize = require("./utils/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students", studentRoutes);
app.use("/courses", coursesRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
})




