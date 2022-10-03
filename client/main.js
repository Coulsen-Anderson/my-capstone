const baseURL = 'http://localhost:4567'


const getWorkouts = document.querySelector('#workouts-container')
const absBtn = document.querySelector('#one')

const chestBtn = document.querySelector('#two')


const tricepsBtn = document.querySelector('#three')


const shouldersBtn = document.querySelector('#four')


const backBtn = document.querySelector('#five')


const legsBtn = document.querySelector('#six')





const getOneWorkout = () => {
    axios.get(`${baseURL}/api/database/abs`)
    .then((res) => {
        console.log(res.data)
        displayWorkouts(res.data)
    })
}

const getTwoWorkout = () => {
    axios.get(`${baseURL}/api/database/chest`)
    .then((res) => {
        console.log(res.data)
        displayWorkouts(res.data)
    })
}

const getThreeWorkout = () => {
    axios.get(`${baseURL}/api/database/triceps`)
    .then((res) => {
        console.log(res.data)
        displayWorkouts(res.data)
    })
}

const getFourWorkout = () => {
    axios.get(`${baseURL}/api/database/shoulders`)
    .then((res) => {
        console.log(res.data)
        displayWorkouts(res.data)
    })
}

const getFiveWorkout = () => {
    axios.get(`${baseURL}/api/database/back`)
    .then((res) => {
        console.log(res.data)
        displayWorkouts(res.data)
    })
}

const getSixWorkout = () => {
    axios.get(`${baseURL}/api/database/leg`)
    .then((res) => {
        console.log(res.data)
        displayWorkouts(res.data)
    })
}

const displayWorkouts = (obj) => {
    const workoutName = document.createElement('h1')
    workoutName.classList.add('workoutCardName')
    workoutName.textContent = obj.name
    
    getWorkouts.innerHTML = ''
    getWorkouts.appendChild(workoutName)
    for(let i = 0; i < obj.workouts.length; i++){
        createWorkoutCard(obj.workouts[i])
    }
}

const createWorkoutCard = (workout) => {
    const workoutCard = document.createElement('section')
    workoutCard.classList.add('workout-card')

    workoutCard.innerHTML = `
        <p>${workout}</p>
       
    `
    getWorkouts.appendChild(workoutCard)
}




absBtn.addEventListener('click', getOneWorkout)
chestBtn.addEventListener('click', getTwoWorkout)
tricepsBtn.addEventListener('click', getThreeWorkout)
shouldersBtn.addEventListener('click', getFourWorkout)
backBtn.addEventListener('click', getFiveWorkout)
legsBtn.addEventListener('click', getSixWorkout)