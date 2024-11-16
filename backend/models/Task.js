const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    important: {
        type: Boolean,
        default: false
    },
    complete: {
        type: Boolean,
        default: false
    }
}, { 
    timestamps: true
});

const TaskModel = mongoose.model('task', TaskSchema);

module.exports = TaskModel;