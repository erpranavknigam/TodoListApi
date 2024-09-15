const express = require('express')
const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')
const app = express()

app.use(express.json())

app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/task', taskRoutes)
module.exports = app