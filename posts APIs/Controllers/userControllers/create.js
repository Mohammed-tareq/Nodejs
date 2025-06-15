import User from "../../Models/user.js";
import AppError from "../../utils/AppError.js";

const createUser = async (req, res,next) => {
    try{
        const {body} = req;
        if(!body.name || !body.email || !body.password){
            throw new AppError("Please provide all the required fields", 400);

        }

        const user = await User.create({
            name: body.name,
            email: body.email,
            password: body.password,
        })

        res.status(201).json({
            status: "success",
            message: "User created successfully",
            data: user
        });

    } catch (err){
        console.log(err);
        next(err);
    }
};

export default createUser;