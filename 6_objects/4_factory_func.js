// const student = {
//     // property
//     fname: "emily",
//     lname: "ross",
// };

// const anotherStudent = {
//     //property
//     fname: "rachel",
//     lname: "williams"
// };

// factory function
function createStudentInfo(fname, lname){
    return {
        fname,
        lname,
        
        showInfo: function(){
            return `Hi everyone I'm ${this.fname} ${this.lname}.`
        }
    };
}

const student1 = createStudentInfo("Emily", "Ross");
const student2 = createStudentInfo("Rachel", "Williams");

console.log(student1.showInfo());
console.log(student2);

