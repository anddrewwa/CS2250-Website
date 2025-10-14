let numbers = [1,2,3,4,6];

// for loops, you have to know ahead of time how many times you are iterating and when you are going to stop
// while loops you don't have to know exaclty when the loop will stop

let i = 0;
while (i < numbers.length){
    const element = numbers[i];
    console.log(element);
    i++
}

let total = 0;
while(true){
    total += 10;
    if(total == 40){
        break;
    }
}

// do while loop- do now check later
let x = 0;
do{
    console.log("I am here");
    x++;
} while(x < 0 ); // while false