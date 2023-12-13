import bcrypt from "bcryptjs"
//import jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config()

export const hashPass=(password)=>{
    return bcrypt.hash(password, 10)
} 

export const examinePass = (password, passwordSaved)=>{
    return bcrypt.compare(password, passwordSaved)
}