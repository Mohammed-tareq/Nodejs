const fs = require("fs");

const dataStudent = fs.readFile("students.json", "utf-8");

const updateStudent = JSON.parse(dataStudent);
updateStudent.course = "Data Science";
fs.writeFile("students.json", JSON.stringify(updateStudent),(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Student updated successfully");
    }
});