
const fs = require("fs");

fs.readFileSync("students.json", "utf-8", (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
        }
    });
