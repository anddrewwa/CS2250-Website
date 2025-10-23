const student ={
    name: "kayla",
    major: "building bob",

    schedule: {
        morning: "CS 2250",
        evening: "CS 3310",
    }
}

//destructered assignments
const{name} = student;
console.log(name);

const {morning} = student.schedule;
console.log(morning);



