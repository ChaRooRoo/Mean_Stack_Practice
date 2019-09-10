const express = require('express');
const path = require('path');
//consider requiring moment
const tasks = require('./tasks');
const app = express();
const PORT = process.env.port || 5000;
//check to see if server works

// (Route) = gets all numbers
app.get('/api/tasks', (req, res)=>{
    res.json(tasks);
});

app.get('/api/tasks/:id', (req, res)=>{
    res.json(tasks.filter(task => task.id === parseInt(req.params.id)));
});
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


//push Create new Task


//put Update Task

//delete delete Task

app.listen(PORT, () => console.log(`You are listening on PORT: ${PORT}`));