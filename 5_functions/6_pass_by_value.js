let number = 10;

console.log(`1. numbers = ${number}`);

function powerTwo(number){
    number = number ** 2;
    console.log(`INSIDE THE FUNCTION: number = ${number}`);
    
}

powerTwo(number);
console.log(`2. numbers = ${number}`);

// pass by references
const data = {"one": 1, "two": 2};

function addNewData(data){
    data["three"] = 3;
}

addNewData(data);
console.log(data);



