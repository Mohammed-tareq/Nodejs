import User from '../../Models/user.js';
import {isValidObjectId} from "mongoose";
import AppError from '../../utils/AppError.js';


const getUserByID = async (req,res,next)=>{
    try{
        const {id} = req.params;
        // if(!isValidObjectId(id)) throw new AppError("Invalid user id", 400);
        const user = await User.findById(id);
        if(!user) throw new AppError("User not found", 404);
        res.status(200).json({
            status: "success",
            message: "User found",
            data: user
        });

    } catch(err){
        console.log(err);
        next(err)
    }
}


export default getUserByID;