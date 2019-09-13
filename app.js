const express = require('express');
const app = express();
const path = require('path');
//consider requiring moment for date/ time format

const PORT = process.env.port || 5000;


//Init Middleware

//Body Parser Middleware
//allows us to use raw json
app.use(express.json());

app.use(express.urlencoded({extended: false}));


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

 //(arg1: parent route, arg2: require path) Using middle-ware to create a link to that url in our project file path
app.use('/api/tasks', require('./routes/api/tasks'));


//push Create new Task


//put Update Task

//delete delete Task

app.listen(PORT, () => console.log(`You are listening on PORT: ${PORT}`));