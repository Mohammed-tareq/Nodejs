const fs = require("fs");

const dataStudent = fs.readFile("students.json", "utf-8");
const addStudent = JSON.parse(dataStudent);

addStudent.push({
    id: 4,
    name: "John Doe",
    age: 20,
    course: "Computer Science",
    grades: {
        math: 90,
        programming: 95
    }
});

fs.writeFile("students.json", JSON.stringify(addStudent),(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Student added successfully");
    }
});