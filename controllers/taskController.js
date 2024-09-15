const Task = require('../models/Task')

exports.CreateTask = async (req, res) => {
    const {task, description} = req.body
    console.log(task, description)
    try{
        if(!task || !description){
            return res.status(400).json({message: "Task and Description are required"})
        }
        else{
            const newTask = new Task({
                task,
                description
            })
            await newTask.save()
            return res.status(201).json(newTask)
        }
        
    } catch(ex){
        res.status(500).json({message: `Error Creating Task: ${ex}`})
    }
}

exports.UpdateTask = async (req, res) => {
    const {id} = req.params
    const {task, description} = req.body

    try{
        if(!id || !task || !description){
            return res.status(400).json({message: "Enter task and description"})
        } else{
            let existingTask = await Task.findOne({_id: id})
            if(!existingTask){
                return res.status(404).json({message: "Task does not exists"})
            } else{
                existingTask.task = task
                existingTask.description = description
                await existingTask.save()
                return res.status(201).json({existingTask})
            }
        }
    } catch(ex){
        return res.status(500).json({message: `Some error occured: ${ex}`})
    }
}

exports.DeleteTask = async (req, res) => {
    const {id} = req.params
    try{
        const result = await Task.findByIdAndDelete({_id: id})
        if(!result){
            return res.status(404).json({message: "Task not found"})
        } else{
            return res.status(200).json({message: "Task deleted successfully"})
        }
    } catch(ex){
        return res.status(500).json({message: `"Some Error Occurred": ${ex}`})
    }
}

exports.FindTask = async (req, res) => {
    const {id} = req.params
    try{
        const task = await Task.findById({_id: id})
        if(!task){
            return res.status(404).json({message: "Task not found"})
        } else{
            return res.status(200).json({message: task})
        }
    } catch(ex){
        return res.status(500).json({message: "Some Error Occurred"})
    }
}

exports.GetAllTasks = async(req, res) => {

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
        
    if (page < 1 || limit < 1) {
        return res.status(400).json({ message: "Page and limit must be positive integers" });
    }

    
    try{
        const skip = (page - 1) * limit;
        const [tasks, totalCount] = await Promise.all([
            Task.find().skip(skip).limit(limit),
            Task.countDocuments()
        ])
        
        if(tasks){
            return res.status(200).json({
                page,
                limit,
                totalCount,
                totalPages: Math.ceil(totalCount / limit),
                tasks
            })
        } else{
            return res.status(404).json({message: "Tasks not found"})
        }
    } catch(ex){
        return res.status(500).json({message: "Error Occurred"})
    }
}