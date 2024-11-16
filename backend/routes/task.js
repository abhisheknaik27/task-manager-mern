const router = require('express').Router();
const TaskModel = require('../models/Task');
const UserModel = require('../models/User');
const authenticateToken = require('./auth');
//create Task
router.post('/createTask', authenticateToken ,  async (req, res) => {
    try{
        const { title, description } = req.body;
        const { id } = req.headers;

        const newtask = await TaskModel.create({ title, description });
        const taskId = newtask._id;
        await UserModel.findByIdAndUpdate(id, {$push:{task: taskId._id}});
        res.status(200).json({ msg: "Task Created" });
    }catch(err){
        console.log(err);
        res.status(400).json({msg: "Internal Server Error"});
    }
});

router.get('/getAllTasks', authenticateToken, async(req, res) => {
    try{
        const { id } = req.headers;
        const userData = await UserModel.findById(id).populate('task');
        res.status(200).json({ userData });
    }catch(err){
        console.log(err);
        res.status(400).json({msg: "Internal Server Error"});
    }
});

module.exports = router;
