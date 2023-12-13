import userModel from "../models/userModel.js";

class authMongooseDao{
    async registerDao(dto){
        const document = await userModel.create(dto)
        const simple= {
            id: document._id,
            userName: document.userName,
            email: document.email,
            profilePc: document.profilePic,
            createdAt: document.createdAt,
            updatedAt: document.updatedAt
        }
        return simple 
    }
    async oneEmail(email){
        const document= await userModel.findOne({email: email})
        return document
    }
}

export default authMongooseDao