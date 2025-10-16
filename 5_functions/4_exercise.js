/**
 * 
 * write a function that accepts a string as a parameter
 * and finds the longest word within the string
 * 
 */


function findLongestWord(str){
    textArray = str.split(" ");
    
    let long = "";
    let longLength = 0;

    for(let word of textArray){
        if(word.length > longLength){
            long = word;
            longLength = word.length;
        }
    }
    return long === undefined ? "the string is empty" : long;
}

text = "I love JavaScript and Python";

console.log(findLongestWord(text)); // JavaScript
