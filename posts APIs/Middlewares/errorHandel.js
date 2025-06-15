// import AppError from "../utils/AppError.js";
// import mongoose from "mongoose";

// export default (err, req, res, next) => {
//     console.log(err.stack);

//     if (err instanceof AppError) {
//         return res.status(err.statusCode).json({
//             status: "Failed",
//             message: err.message
//         })
//     }

//     if (err.code === 11000 || err instanceof mongoose.mongo.MongoServerError && err.code === 11000) {

//         return res.status(400).json({
//             status: "Failed",
//             message: `this ${Object.keys(err.keyValue)[0]} is already taken`,
//         });
//     }

//     if(err.name === "ValidationError") {
//         return res.status(400).json({
//             status: "Failed",
//             message: err.message
//         })
//     }

//     if(err.name === "CastError") {
//         return res.status(400).json({
//             status: "Failed",
//             message: `invalid ${err.path} : ${err.value}`
//         })
//     }

//     res.status(500).json({
//         status: "Failed",
//         message:  "check global error",
//     })
// }

import mongoose from "mongoose";
import AppError from "../utils/AppError.js";

export default (err, req, res, next) => {

    console.log(err.stack);

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "Failed",
            message: err.message
        })
    }


    if (err.code === 11000) {
        return res.status(400).json({
            status: "Failed",
            message: `Dabulcate ${Object.keys(err.KeyValue()[0])} entered`,
        });
    }

    


    res.status(500).json({
        status: "Failed",
        message: "check global error" + err.stack,

    });




};