let course = "CS 2500";

if(course.toLowerCase() == 'cs 2500'){
    console.log("web development");
}else if(course.toLowerCase() == 'cs 3100'){
    console.log("soft"); 
}else if(course.toLowerCase() == 'cs 4100'){
    console.log("peanutbutter");
}else if(course.toLowerCase() == 'cs 4800'){
    console.log("cheese");
}else{
    console.log("other courses");
    
}


//  cannot do this in switch !(number >= 10 && number < 20)

switch(course.toLowerCase()){
    case "cs 2250":
        console.log("web developemnt");
        break;

    case "cs 4800":
        console.log("soft");
        break;

    case "cs 2300":
        console.log("cheese");
        break;

    case "9000":
        console.log("it's over 9000");
        break;
}