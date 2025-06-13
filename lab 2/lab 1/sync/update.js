const fs = require("fs");

const dataStudent = fs.readFileSync("students.json", "utf-8");

const updateStudent = JSON.parse(dataStudent);
updateStudent.course = "Data Science";
fs.writeFileSync("students.json", JSON.stringify(updateStudent),(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Student updated successfully");
    }
});