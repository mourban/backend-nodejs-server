const express = require("express");
const tasks = express.Router();
const cors = require("cors");

const Task = require("../models/Task");
tasks.use(cors());

tasks.post('/add', (req, res) => {
    const today = new Date();
    const taskData = {
        description: req.body.description,
        created: today,
        status: 'false',
        id_user: req.body.id_user
    }

    Task.create(taskData)
    .then(task => {
        res.json({
            status: "Tarea registrada"
        })
    })
    .catch(error => {
        res.send("error: " + error);
    })
});

tasks.get('/list/:id_user', (req, res) => {
    var userId = req.params.id_user;
    Task.findAll({
        where: {
            id_user: userId
        }
    })
    .then(taskList => {
        res.send(taskList);
    })
    .catch(error => {
        res.status(400).json({ error: error });
    })
});

tasks.get('/:id', (req, res) => {
    var taskId = req.params.id;
    Task.findOne({
        where: {
            id_task: taskId
        }
    })
    .then(task => {
        if (task){
            res.send(task);
        }else{
            res.status(400).json({error: "Tarea no existe"});
        }
    })
    .catch(error => {
        res.status(400).json({ error: error });
    })
});

tasks.put('/update/:id', (req, res) => {

    Task.findOne({
        where: {
            id_task: req.params.id
        }
    })
    .then(task => {
        if (task){
          
            const updatedValues = {
                description: req.body.description? req.body.description : task.description,
                status: req.body.status? req.body.status : task.status,
                created: new Date()
            }
            console.log(updatedValues);
    
            task.update(updatedValues);
            res.json({
                status: "Tarea actualizada"
            });

        }else{
            res.status(400).json({error: "Tarea no existe"});
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: error });
    });

});

tasks.delete('/delete/:id', (req, res) => {

    Task.findOne({
        where: {
            id_task: req.params.id
        }
    })
    .then(task => {
        if (task){
            task.destroy();
            res.json({
                status: "Tarea eliminada"
            });
        }else{
            res.status(400).json({error: "Tarea no existe"});
        }
    })
    .catch(error => {
        res.status(400).json({ error: error });
    });

});

module.exports = tasks;