function great(name, func){
    console.log(`Hello, ${name}`);
    func();  
}

function bye (){
    console.log("bye bye!");
    
}


function bye(){
    console.log("Bye, Bye!");
    
}

console.log("CS 2250", bye);

/// aychronous
setTimeout (() => {
    console.log("This message will show wafter 3 second");
    
}, 3000);

function boilWater(callBack){
    console.log("boiling water");
    
    setTimeout(() => {
        console.log("water is boiled");
        callBack();   
    }, 4000); 

}

function cookPasta() {
    console.log("I am cooking my pasta");
    
}

boilWater(cookPasta);
console.log("Meanwhile, I am cooking my pasta");



