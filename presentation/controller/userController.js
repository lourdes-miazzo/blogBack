import UserManager from "../../domain/manager/UserManager.js"
import PostManager from "../../domain/manager/PostManager.js"

 

export const getUser= async(req,res,next)=>{
    try{
        const {id}= req.params
        const manager= new UserManager()
        const user= await manager.findUser(id)
        if(!user){
            return res.status(400).send({message: `User with id ${id} not found`})
        }
        res.status(400).send({message: `User with id ${id} found`, payload: user})
    }
    catch(e){
        next(e)
    }
  
}

export const updateUser= async(req,res,next)=>{
    try{
        const {id}= req.params       
        const {userName, preUserName, email, password}= req.body
        const file= req.file
        
        
        //actualizar los posteos al nuevo userName
        if(userName !== preUserName){
            const postManager= new PostManager()
            const updatePost= await postManager.updateUserInPost(preUserName, userName)
        }
      
        //si no llega contraseña hashearla
        if(!password){
            res.status(400).send({message: "You need to put the password"}) 
        }
        const manager= new UserManager()  
        const hasshed= await manager.hashP(password)
 
        //finalmente mandar la data
        const findUser= await manager.userUpdateMan(id, file, userName, hasshed, email)
        console.log(findUser)
        res.status(200).send({message: "User updated successfully", payload: findUser})    
    }
    catch(e){
        console.log(e)
    }
}
export const deleteUser= async(req,res,next)=>{
    try{
        const id= req.params.id

    
        const manager= new UserManager()
        const user = await manager.findUser(id)
        if(!user){
            return res.status(400).send({message: "The user you want to delete is not saved in this blog"})
        } 
        const postManager= new PostManager()
        await postManager.deletePost(user)
        await manager.deleteUser(id)
        res.status(200).send({message: "User deleted"})  

    }
    catch(e){
        next(e)
    }
}