// Environment configuration
require('dotenv').config()

// connecting expressApp 
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')

// express app 
const app = express()

// Middleware configuration
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes 
app.use('/api/workouts', workoutRoutes)

// connect to DB
mongoose.connect(process.env.MOBG_URI)

    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected DATABASE and running on port ', process.env.PORT)
        })
    })
    .catch(() => {
        console.log(error)
    })
