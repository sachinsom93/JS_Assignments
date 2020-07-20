// given object
const student = {
    name : "Helsinki", 
    age : 24, 
    projects :{
        diceGame : "Two player dice game using javascript"
    } 
}

// for destructuring of given object student
console.log("%c Answer 2 "," color:white; background-color: black; font-weight: bolder;")
const {name, age , projects} = student
console.log(name, age, projects)