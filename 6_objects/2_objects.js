const student = {
    // property
    fname: "emily",
    lname: "ross",

    //method
    sayHi: () => {
        console.log("Hi everyone");
        
    },

    sayGoodbye(){
        console.log("Bye Bye");
        
    },

    studentInfo: function(){
        console.log(`${this.fname} ${this.lname}`);
        
    },
};

student.sayHi();
student.studentInfo();
