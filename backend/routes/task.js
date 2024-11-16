const router = require('express').Router();
const TaskModel = require('../models/Task');
const UserModel = require('../models/User');
const authenticateToken = require('./auth');
//create Task
router.post('/createTask', authenticateToken ,  async (req, res) => {
    try{
        const { title, description } = req.body;
        const { id } = req.headers;

        const newtask = new TaskModel({ title: title, description:description });
        const saveTask = await newtask.save();
        const taskId = saveTask._id;

        await UserModel.findByIdAndUpdate(id, { $push: {tasks: taskId._id} });
        res.status(200).json({ msg: "Task Created" });
        
    }catch(err){
        console.log(err);
        res.status(400).json({msg: "Internal Server Error"});
    }
});

//get all tasks
router.get('/allTasks', authenticateToken, async(req, res) => {
    try{
        const { id } = req.headers;
        const userData = await UserModel.findById(id).populate({
            path: "tasks",
            options: { sort: { createdAt: -1 } }
    });
        
        res.status(200).json({ data: userData });
    }catch(err){
        console.log(err);
        res.status(400).json({msg: "Internal Server Error"});
    }
});

//delete task
router.delete('/deleteTask/:id', authenticateToken, async(req, res) => {
    try{
        const { id } = req.params;
        const userId = req.headers.id;
        await TaskModel.findByIdAndDelete(id);
        await UserModel.findByIdAndUpdate(userId, { $pull: {tasks: id}});
        res.status(200).json({ msg: 'task deleted' });
    }catch(err){
        console.log(err);
        res.status(400).json({msg: "Internal Server Error"});
    }
});

//update Api
router.put('/updateTask/:id', authenticateToken, async(req, res) => {
    try{
        const { id } = req.params;
        const { title, description } = req.body;
        await TaskModel.findByIdAndUpdate(id, { 
            title: title,
            description: description
        });
        res.status(200).json({ msg: 'task updated' });
    }catch(err){
        console.log(err);
        res.status(400).json({msg: "Internal Server Error"});
    }
});

//update imp tas
router.put('/updateImpTask/:id', authenticateToken, async(req, res) => {
    try{
        const { id } = req.params;
        const taskData = await TaskModel.findById(id);
        const impTask = taskData.important;
        await TaskModel.findByIdAndUpdate(id, { 
            important: !impTask
        });
        res.status(200).json({ msg: 'task updated' });
    }catch(err){
        console.log(err);
        res.status(400).json({msg: "Internal Server Error"});
    }
});

//update complete tasl
router.put('/updateCompleteTask/:id', authenticateToken, async(req, res) => {
    try{
        const { id } = req.params;
        const taskData = await TaskModel.findById(id);
        const compTask = taskData.complete;
        await TaskModel.findByIdAndUpdate(id, { 
            complete: !compTask
        });
        res.status(200).json({ msg: 'task updated' });
    }catch(err){
        console.log(err);
        res.status(400).json({msg: "Internal Server Error"});
    }
});

//get all important tasks
router.get('/impTasks', authenticateToken, async(req, res) => {
    try{
        const { id } = req.headers;
        const data = await UserModel.findById(id).populate({
            path: "tasks",
            match: { important: true },
            options: { sort: { createdAt: -1 } }
        });

        const impTaskData = data.tasks;
        
        res.status(200).json({ data: impTaskData });
    }catch(err){
        console.log(err);
        res.status(400).json({msg: "Internal Server Error"});
    }
});

//get all important tasks
router.get('/completeTasks', authenticateToken, async(req, res) => {
    try{
        const { id } = req.headers;
        const data = await UserModel.findById(id).populate({
            path: "tasks",
            match: { complete: true },
            options: { sort: { createdAt: -1 } }
        });

        const compTaskData = data.tasks;
        
        res.status(200).json({ data: compTaskData });
    }catch(err){
        console.log(err);
        res.status(400).json({msg: "Internal Server Error"});
    }
});

//get all important tasks
router.get('/incompleteTasks', authenticateToken, async(req, res) => {
    try{
        const { id } = req.headers;
        const data = await UserModel.findById(id).populate({
            path: "tasks",
            match: { complete: false },
            options: { sort: { createdAt: -1 } }
        });

        const incompTaskData = data.tasks;
        
        res.status(200).json({ data: incompTaskData });
    }catch(err){
        console.log(err);
        res.status(400).json({msg: "Internal Server Error"});
    }
});

module.exports = router;
