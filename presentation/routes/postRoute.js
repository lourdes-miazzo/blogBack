import { Router } from "express";
import { allPost, deleteSpecificPost, getPost, postPost, putPost  } from "../controller/postController.js";
import { uploader } from "../../shared/multer.js";

const postRoute= Router()


postRoute.get("/:id", getPost)
postRoute.post("/upload", uploader.single('file'), postPost)
postRoute.get("/", allPost)
postRoute.put("/:id", putPost)
postRoute.delete("/:id", deleteSpecificPost)

export default postRoute