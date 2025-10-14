const course = {
    name: 'cs 2250',
    duration: 75,
    'section': 3,
}

console.log(course.name); // cs 2250
console.log(course['name']); // cs 2250



// for ... in
for(const key in course){
    console.log(course[key]);
}


const numbers=[1,2,3,4];
for(const idx in numbers){
    console.log(`${idx}. ${numbers[idx]}`);
    
}


for(const number of numbers){
    console.log(number);
    
}

