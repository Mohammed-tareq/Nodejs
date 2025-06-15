import User from '../../Models/user.js';
import {isValidObjectId} from "mongoose";
import AppError from '../../utils/AppError.js';


const deleteUser = async (req,res, next) => {
    try{
        const {id} = req.params;
        if(!isValidObjectId(id)){
            throw new AppError("Please provide all the required fields", 400);
        
        }

        const user = await User.findByIdAndDelete(id);
        if(!user) throw new AppError("User not found", 404);

        res.status(200).json({
            status:"success",
            massage:"Post deleted successfully"
        })


    } catch (err){
        console.log(err)
        next(err);
    }
}

export default deleteUser;