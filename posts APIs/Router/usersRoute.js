import {Router} from "express";
import userIndex from "../Controllers/userControllers/userIndex.js";

const router = Router();

router.get("/",userIndex.getAllUser);
router.post("/",userIndex.createUser);

router.get("/:id",userIndex.getUserByID);
router.put("/:id",userIndex.updateUser);
router.delete("/:id",userIndex.deleteUser);

export default router;