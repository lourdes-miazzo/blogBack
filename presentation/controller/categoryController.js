import CategoryManager from "../../domain/manager/CategoryManager.js"

export const getAllCategory= async (req,res,next)=>{
    try{
        const manager= new CategoryManager()
        const all= await manager.getCategory()
        res.status(200).send({message: "All categories found", payload: all})
    }
    catch(e){
        next(e)
    }
}
export const postCategory= async (req,res,next)=>{
    try{
        const data= req.body

        const manager= new CategoryManager() 
        const categoryPost= await manager.postCategory(data)
        res.status(201).send({message: "New category added", payload: categoryPost})
    }
    catch(e){
        next(e)
    }
}