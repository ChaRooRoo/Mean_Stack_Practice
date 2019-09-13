const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const tasks = require('../../tasks');

// (Route)
router.get('/', (req, res)=>{
    res.json(tasks);
});

router.get('/:id', (req, res)=>{
    const found = tasks.some(task => task.id === parseInt(req.params.id));
    if (found){
        res.json(tasks.filter(task => task.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg: `Invalid task \'${req.params.id}\'`});
    }
    console.log(found);

});

// Create Task (Post method)
router.post('/', (req, res)=>{
   const newTask = {
       //we're not using a database therefore must use node-command:npm i uuid
       
       id: uuid.v4(),
       name: req.body.name,
       description: req.body.description, 
       status: "inactive"
   }
   if (!(newTask.name && newTask.description)){
       res.status(400).json({msg: 'Please include name of task and a description'});
   }
   else{
       tasks.push(newTask);
       res.json(tasks);
    }
});

//update task
router.put('/:id', (req, res)=>{
    const found = tasks.some(task => task.id === parseInt(req.params.id));
    if (found){
        const updTask = req.body;
        tasks.forEach(task => {
            if(task.id === parseInt(req.params.id)){
                task.name = updTask.name ? updTask.name : task.name;
                task.description = updTask.description ? updTask.description : task.description;
                
                res.json({msg: "task updated", task});
            }
        });
    }
    else{
        res.status(400).json({msg: `Invalid task \'${req.params.id}\'`});
    }
    console.log(found);

});

//DELETE A TASK
router.delete('/:id', (req, res)=>{
    const found = tasks.some(task => task.id === parseInt(req.params.id));
    if (found){
        res.json({msg: "Deleted tasks", task: tasks.filter(task => task.id !== parseInt(req.params.id))});
    }
    else{
        res.status(400).json({msg: `Invalid task \'${req.params.id}\'`});
    }
    console.log(found);

});

module.exports = router;