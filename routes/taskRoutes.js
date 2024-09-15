const express = require('express')
const tasks = require('../controllers/taskController')
const authToken = require('../authentication/authenticateToken')

const router = express.Router()

router.post('/create',authToken,tasks.CreateTask)
router.put('/update/:id',authToken,tasks.UpdateTask)
router.delete('/delete/:id',authToken,tasks.DeleteTask)
router.get('/getById/:id',authToken,tasks.FindTask)
router.get('/getAll',authToken,tasks.GetAllTasks)

module.exports = router