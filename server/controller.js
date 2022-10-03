

const database = require('./db.json')
let workoutId = 7

module.exports = {
    getWorkouts: (req, res) => {
        
        res.status(200).send(database[0])
    },


    getWorkoutChest: (req, res) => {
        
        res.status(200).send(database[1])
    },


    getWorkoutTriceps: (req, res) => {
        
        res.status(200).send(database[2])
    },


    getWorkoutShoulders: (req, res) => {
        
        res.status(200).send(database[3])
    },


    getWorkoutBack: (req, res) => {
        
        res.status(200).send(database[4])
    },


    getWorkoutLeg: (req, res) => {
        
        res.status(200).send(database[5])
    },

    addWorkout: (req, res) => {
        const {name, workout} = req.body

        let newWorkoutObject = {
            id: workoutId,
            name: name,
            workout: workout,
        }

        database.push(newWorkoutObject)
        workoutId++
        res.status(200).send(database)


    },

    deleteWorkout: (req, res) => {
        const index = database.findIndex(el => el.id === +req.params.id)

        database.splice(index, 1)

        res.status(200).send(database)
    }
} 
        