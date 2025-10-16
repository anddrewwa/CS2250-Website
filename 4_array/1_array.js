const numbers = [2,3,4,5,6];

// 1. add items to the end of the array using push()
console.log(numbers);
numbers.push(10);
console.log(numbers);

// 2. add item to beginning of array using unshift()
numbers.unshift(1,500);
console.log(numbers);

// 3. add items @t th emiddle of the array using splice()
// numbers.splice(startIndex, numbersItemtoDelete, ItemToAdd, AnotherItemtoAdd )

numbers.splice(3,0,7000, -399,-55555, 777)
console.log(numbers);

// 4. slice(startIndex, endIndex);
console.log(numbers.slice(2,6));

const anotherNumbers = numbers.slice();
console.log(anotherNumbers);


anotherNumbers.push(99);
console.log(numbers);
console.log(anotherNumbers);


// shallow copy vs deep copy
const arr1 = [[1],[2]];

const arr2 = arr1.slice();
console.log(arr1);
console.log(arr2);

arr2[0].push(100);
console.log(arr1);
console.log(arr2);




