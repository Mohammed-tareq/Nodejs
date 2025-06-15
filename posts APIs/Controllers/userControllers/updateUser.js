
import { log } from 'console';
import User from '../../Models/user.js';
import {isValidObjectId} from "mongoose";
import AppError from '../../utils/AppError.js';



const updateUser = async (req, res , next) => {
    try{
        const {id} = req.params;
        const {body} = req;
        if(!isValidObjectId(id)) throw new AppErrorError("id is not valid",400);
        if(!body.name || !body.password) throw new AppErrorError("name and password is required",400);
        const updateUser = await User.findByIdAndUpdate(id,{
            name:body.name,
            password:body.password
        } , {new: true});

        if(!updateUser) throw new AppErrorError("user not found",404);
        res.status(200).json({status:"success" ,message:"user updated",user: updateUser});



    } catch (err) {
        console.log(err);
        next(err);

    }
}

export default updateUser;