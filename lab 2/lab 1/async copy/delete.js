const fs = require("fs");

const dataStudent = fs.readFileSync("students.json", "utf-8");

const deleteStudent = JSON.parse(dataStudent);

deleteStudent.splice(0,1);
fs.writeFileSync("students.json", JSON.stringify(deleteStudent),(err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Student deleted successfully");
    }
});