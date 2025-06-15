import User from "../../Models/user.js";

      const getAllUser = async (req, res,next) =>{
            try {
                const users = await User.find();
                res.status(200).json(users);
            } catch (err){
                console.log(err);
                next(err);
            }
        }

export default getAllUser;