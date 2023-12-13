import postMongooseDao from "../../data/dao/postMongooseDao.js"

class PostManager{
    constructor(){
        this.dao= new postMongooseDao()
    }
    async getUserPosts(user){
        return this.dao.getUserPosts(user)
    }
    async getCatPosts(cat){
        return this.dao.getCatPosts(cat)
    }
    async postUserAndCat(user, cat){
        return this.dao.postUserAndCat(user, cat)
    }
    async getAll(){
        return this.dao.getAll()
    }
    async getPost(id){
        return this.dao.postId(id)
    }
    async postPost(title, description, file, userName, arrayCategory){
        return this.dao.posting(title, description, file, userName, arrayCategory)
    }
    async deletePost(user){
        return this.dao.deletePost(user)
    }
    async updatePost(id, data){
        return this.dao.update(id, data)
    }
    async deleteSpecificPost(id){
        return this.dao.deletePostId(id)
    }
    async updateUserInPost(preUserName, userName){
        return this.dao.updateUserName(preUserName, userName)
    }
 
}

export default PostManager