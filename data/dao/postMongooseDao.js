import postModel from "../models/postModel.js"

class postMongooseDao{
    async getUserPosts(user){
        const document= await postModel.find({userName: user})
        return document
    }
    async getCatPosts(cat){
        const document= await postModel.find({category: {$in: cat}})
        return document
    }
    async postUserAndCat(user, cat){
        return await postModel.find({userName: user, category: {$in: cat}})
    }
    async getAll(){
        const document = await postModel.find()
        return document 
    }
    async deletePost(user){
        await postModel.deleteMany({userName : user.userName})
    }
    async postId(id){
        const document= await postModel.findById(id)
        return document
    }
    async posting(title, description, file, userName, arrayCategory){
        const photo=  file.filename
        const category= arrayCategory
        const post = {title, description, photo, userName, category}
        const document=await postModel.create(post)
     
        return document
    }
    async update(id, data){
        const document= await postModel.findByIdAndUpdate(
            id,
            {$set: data},
            {new: true}
        )
        return document
    }
    async deletePostId(id){
        await postModel.findByIdAndDelete(id)
    }
    async updateUserName(preUserName, newUserName){
        const document= await postModel.updateMany(
            {userName: preUserName},
            {$set: {userName: newUserName}}, 
            {new: true}
        )
        return document
    }

}
export default postMongooseDao