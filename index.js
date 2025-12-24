const express = require('express');
const app = express();
const port = 3000;
const studentRoutes = require('./routes/studentRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students" , studentRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

