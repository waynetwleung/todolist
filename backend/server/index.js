const express = require('express');
const app = express();
const port = 5001; 

// to process JSON data
app.use(express.json())

// temp holder of tasks
let tasks = []

// POST route to add a new task
app.post('/api/tasks', (req, res) => {
    const task = req.body
    tasks.push(task)
    res.status(201).send(task)
})

// GET route to get all tasks
app.get('/api/tasks', (req, res) => {
    res.send(tasks);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
