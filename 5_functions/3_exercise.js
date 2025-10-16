// write a fucntion that accepets a string as a parameter and counts the 
// numnbers of vowels within in the string

//indexOf()

function vowelCount(str){
    let count = 0;
    const vowels = 'aeiou';

    for(i = 0; i < str.length; i++){
        const currentLetter = str[i]
        if(vowels.indexOf(currentLetter) !== -1){
            count++;
        }
    }

    return count;
}

console.log(vowelCount("brown apple"));



