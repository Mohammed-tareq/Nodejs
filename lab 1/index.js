const { count } = require("console");

const users = [
  { name: "John Doe", age: 28, role: "developer" },
  { name: "Jane Smith", age: 32, role: "admin" },
  { name: "Bob Johnson", age: 24, role: "developer" },
  { name: "Sarah Williams", age: 27, role: "manager" },
  { name: "Mike Brown", age: 35, role: "admin" },
];


// 2. Use array methods to:

//    - Filter users above age 30
const FilterUsersByAge = users.filter((user)=>user.age>30);
console.log(FilterUsersByAge);
//    - Transform the data to only include names
const TransformUsers = users.map((user)=> user,name);
console.log(TransformUsers);
//    - Find the first user with role "admin" using array methods
const FindFirstUserAdmin = users.find((user)=>user.role === "admin");
console.log(FindFirstUserAdmin);
//    - Find the last user with role "admin" using array methods
const FindLastUserAdmin = users.findLast((user)=>user.role === "admin");
console.log(FindLastUserAdmin);
//    - Make deepCopy Function with example for nested objects

// this is the easy way and old
// const DeepCopy = (obj) => {
//   return JSON.parse(JSON.stringify(obj));
// };

//  this is the update for run time js
// const deepCopy = structuredClone(obj);

// this is the hard function

function deepCopy(obj){

    if(typeof obj !== "object" || obj === null || typeof obj === "function") return obj;

    if(Array.isArray(obj)){
       const result=[];
        obj.forEach((item,index)=>{
            result[index] = deepCopy(item);
        })
        return result;
        
    }

    const result ={};

    const keys = Object.keys(obj);
    keys.forEach((key)=>{
        result[key] = deepCopy(obj[key]);
    })
    // for (let key of keys) {
    //     result[key] = deepCopy(obj[key]);
    // }
    return result;
    


}