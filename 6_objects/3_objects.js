const student = {
    // property
    fname: "emily",

    //method
    traditional_funct(){
        console.log(this.fname);
        
    },

    studentInfo: function(){
        console.log(this.fname);
        
    },

    showInfo: () => {
        console.log(this.fname);
        
    }
};

student.traditional_funct();
student.studentInfo();
student.showInfo();