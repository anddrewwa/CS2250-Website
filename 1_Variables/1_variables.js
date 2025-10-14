// one line comment
/* 
Here is a multiple-line comment
another comment here
*/

// 1---------- VAR --------

var oddNumber = 10;
console.log(oddNumber);

var evenNumber;
console.log(evenNumber);
evenNumber = 20;
console.log(evenNumber);

var specialVariable = null;
console.log(specialVariable);

// do not recommend
//var num1 = 100, num2 = 101, num3 = 102;
var num1 = 100;
var num2 = 101;
var num3 = 102;

// variables redeclaration
var number = 1000;
console.log(number);
var number = 1001;
console.log(number);


// variables reassignment 
var myNumber = 9;
console.log(myNumber)
myNumber = 19;
console.log(myNumber);

// ------- 2. LET --------

let firstName = 'Bronco';
let lastName = "CPP";
let anotherFullName = `Full name is ` + firstName + " " +lastName;
console.log(anotherFullName);


let fullName = `Full name is ${firstName + " " + lastName}`;
console.log(fullName);

let magicNumber;
magicNumber = 13;

// ----------- 3. CONST ---------------
const PI_NUMBER = 3.14;
PI_NUMBER = 3.1456;
console.log(PI_NUMBER);

