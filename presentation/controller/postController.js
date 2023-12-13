import PostManager from "../../domain/manager/PostManager.js"


export const allPost= async(req, res, next)=>{
    const user= req.query.user
    const cat= req.query.cat

    const manager= new PostManager()
    if(user && cat){
        const superFilter= await manager.postUserAndCat(user, cat)
        return res.status(200).send({message: `All post from ${user} in the category: ${cat} found`, payload: superFilter})
    }
    if(user){
        const allUserPost= await manager.getUserPosts(user)
        return res.status(200).send({message: `All post from ${user} found`, payload : allUserPost})
    }
    if(cat){
        const allCatPost= await manager.getCatPosts(cat)
        return res.status(200).send({message: `All post from ${cat} found`, payload: allCatPost})
    }
    const all= await manager.getAll()
    res.status(200).send({message: "All posts found!", payload: all})
}

export const getPost= async(req,res,next)=>{
    try{
        const {id}= req.params
        const manager= new PostManager()
        const post= await manager.getPost(id)
        if(!post){
            return res.status(404).send({message: `Post ${id} not found`})
        }
        res.status(200).send({message: "post found!", payload: post})
    }
    catch(e){
        next(e)
    }
}
export const postPost= async(req,res,next)=>{
    try{
        const file= req.file
        const {title, description, userName, category}= req.body 
        const arrayCategory= category.split(",")
        console.log(category)
        const manager= new PostManager()

        const createPost= await manager.postPost(title, description, file, userName, arrayCategory)
   
        res.status(201).send({message: "Post created", payload: createPost})   
    }
    catch(e){
        next(e)
    }
}
export const putPost= async(req,res,next)=>{
    try{
        const {id}= req.params
        const data= req.body
        const manager= new PostManager()
        const post= await manager.getPost(id)
        if(post.userName !== data.userName){
            return res.status(500).send({message: "You can update only you posts!"})
        }
        
        const updatePost= await manager.updatePost(id, data)
        res.status(200).send({message: "Post updated", payload: updatePost})
    }
    catch(e){
        next(e)
    }
}
export const deleteSpecificPost= async(req,res,next)=>{
    try{
        const {id}= req.params

        const manager= new PostManager()
        await manager.deleteSpecificPost(id)
        res.status(200).send({message: "Post deleted successfully"}) 
    }
    catch(e){
        next(e)
    }
}

export const getImg= async(req,res,next)=>{
    try{
        const manager= new PostManager()
        const result= await manager.getImg()
   
        res.status(200).send({payload: result})
    }
    catch(e){
        next(e)
    }
}