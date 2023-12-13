import { Router } from "express";
import { getUser ,updateUser, deleteUser } from "../controller/userController.js"
import { uploader } from "../../shared/multer.js";
const userRoute= Router()

userRoute.get("/:id", getUser)
userRoute.put("/:id", uploader.single("file"),updateUser)
userRoute.delete("/:id", deleteUser)



export default userRoute