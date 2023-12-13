import { Router } from "express";
import { getAllCategory, postCategory } from "../controller/categoryController.js";

const categoryRoute= Router()

categoryRoute.get("/", getAllCategory)
categoryRoute.post("/", postCategory)

export default categoryRoute