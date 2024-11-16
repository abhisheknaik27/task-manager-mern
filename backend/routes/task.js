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

module.exports = router;
