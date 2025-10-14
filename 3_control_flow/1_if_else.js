let savingAmount = 20;
let expenses = 100;

const amIBroke = savingAmount < expenses;

if(amIBroke){
    console.log("I am broke!");
} else{
    console.log("You're rich!");
}

let grade = 70;

if(grade >= 90){
    console.log("A");
} else if (grade >= 80){
    console.log("B");

} else if (grade >= 70){
    console.log("C");
} else{
    console.log("You failed!");
    
}