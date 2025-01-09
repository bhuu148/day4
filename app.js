// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Array to store tasks
let tasks = [];

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/add', (req, res) => {
    const task = req.body.task;
    if (task) {
        tasks.push({ text: task, completed: false });
    }
    res.redirect('/');
});

app.post('/complete', (req, res) => {
    const taskIndex = req.body.taskIndex;
    if (tasks[taskIndex]) {
        tasks[taskIndex].completed = true;
    }
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});
