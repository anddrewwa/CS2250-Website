const numbers = [0,1,1,2,2];
const total = numbers.reduce((acc, currVal) => { 

    console.log(`acc = ${acc} | currVal = ${currVal}`);
    

    return acc + currVal;
})
console.log(total);

// same as above ^^^
// let accumulator = 0;
// for(let currentVal of numbers){
//     accumulator += currentVal;
// }
// console.log(accumulator);

const array = [[100,2], [3,4]];

const flatArray = array.reduce((acc, curr) => {
    for(let value of curr){
        acc.push(value);
    }
    return acc;

}, [] );

console.log(flatArray); // [100, 2, 3, 4];

const students = [
    {name: 'Alex', age: 21},
    {name: 'Sam', age: 18},
    {name: 'Siri', age: 21},
]
const groupStudentsByAge = students.reduce( (acc, student) => {
    if( acc[student.age]){
        acc[student.age].push(student);
    }else{
        acc[student.age] = [student];
    }
    return acc;
}, {} );

console.log(groupStudentsByAge);


