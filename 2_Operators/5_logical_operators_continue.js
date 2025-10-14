/**
 * 
 * 
 * 
 * 
 */


// || operators return the first truthy value
console.log(false || "Bronco" || "CPP"); // bronco
console.log(false | 11 || 12); // 11

// && operators return the first 1st falsy values
console.log("Cal Poly" && 0); // 0
// if all values are truthy, then return the last truthy value
console.log(1 && "CPP" && -10); // -10

// ! not
console.log(!("Bronco")); // false


