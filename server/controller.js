

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
        let {item} = req.body
        let {id} = req.params
        const index = database.findIndex(el => el.id === +id)
        database[index].workouts.push(item)

        res.status(200).send(database[index])
    },

    deleteWorkout: (req, res) => {
        const index = database.findIndex(el => el.id === +req.params.id)

        database[index].workouts.splice(index, 1)

        res.status(200).send(database[index])
    }
} 
        