const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const controller = require('./controller')
const{getWorkouts, getWorkoutChest, getWorkoutTriceps, getWorkoutShoulders, getWorkoutBack, getWorkoutLeg, addWorkout, deleteWorkout} = controller


app.get('/api/database/abs', getWorkouts)
app.get('/api/database/chest', getWorkoutChest)
app.get('/api/database/triceps', getWorkoutTriceps)
app.get('/api/database/shoulders', getWorkoutShoulders)
app.get('/api/database/back', getWorkoutBack)
app.get('/api/database/leg', getWorkoutLeg)
app.post('/api/addWorkout/:id', addWorkout)
app.delete('/api/deleteWorkout/:id', deleteWorkout) 


app.listen(4567, () => console.log('Working on port 4567'))