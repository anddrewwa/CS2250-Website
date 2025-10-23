const group = {
    members: {
        leader: { 
            name: "emily",
            major: 'cs',
        },

        researcher: {
            name: "elon",
            major: "physics",
        },
        coder:{
            name: "Bob",
            major: "builder"
        },
    },

    guest:{
        admin:{
            name:"testing"
        }
    }
}

//loop through the group object
for (let role in group){
    console.log(role);
    
}
console.log("\n");

for (let role in group.members){
    console.log(role);
    
}
console.log("\n");

for (let role in group.members){
    console.log(group.members[role].name);
    
}