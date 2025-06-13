const fs = require("fs");

const dataStudent = fs.readFileSync("students.json", "utf-8");
const studentData = JSON.parse(dataStudent);

fs.writeFileSync("students.json", JSON.stringify(studentData),(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Student added successfully");
    }
});