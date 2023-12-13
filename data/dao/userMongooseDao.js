import userModel from "../models/userModel.js"

class userMongooseDao{

    async updateUser(id, file, userName, hasshed, email){

    const data = {};
    if (userName) {
        data.userName = userName;
    }
    if (file) {
        data.profilePic = file.filename;
    }
    if (email) {
        data.email = email;
    }
    if (hasshed) {
        data.password = hasshed;
    }
        const document = await userModel.findByIdAndUpdate(
            id,
            {$set: data},
            { new: true})
        
        return document
    }
    async userId(id){
 
        const document= await userModel.findById(id)
       /*  if (!document) {
            // Manejar el caso cuando no se encuentra el usuario
            throw new Error('Usuario no encontrado');
        }  */

      
        return document 
    }
    async eraseUser(id){
        await userModel.findByIdAndDelete(id)
    }
}

export default userMongooseDao