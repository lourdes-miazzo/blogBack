import AuthManager from "../../domain/manager/authManager.js"

export const register= async(req,res,next)=>{
    try{
        const {userName, email, password, profilePic}= req.body

        const manager = new AuthManager()
        const specificEmail= await manager.emailUnique(email)

        if(specificEmail){
            return res.status(400).send({message: "The email you want to use, already have an account in this blog"})
        } 
        const userRegister= await manager.registerMan(userName, email, password, profilePic)
        res.status(201).send({message: "New user created", payload: userRegister}) 
    }
    catch(e){

    }
}
export const login= async(req,res,next)=>{
    try{
        const {email, password}= req.body
        const manager = new AuthManager()
        const emailExist= await manager.emailUnique(email)
        if(!emailExist){
            return res.status(400).send({message: "The email you are using do not have an account in this blog"})
        }
        const passwordSaved= emailExist.password
        const loginSuccess= await manager.loginMan(password, passwordSaved)
        if(!loginSuccess){
            return res.status(400).send({message: "The password do not match"})
        }
        res.status(200).send({message: "login success", payload: emailExist})
    }
    catch(e){
        
    }
}
export const logout= async(req,res,next)=>{
    try{

    }
    catch(e){
        
    }
}