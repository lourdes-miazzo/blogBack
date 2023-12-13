import categoryModel from "../models/categoryModel.js"

class categoryMongooseDao{
    async postCategory(data){
        return await categoryModel.create(data)
    }
    async getCategory(){
        return await categoryModel.find()
    }
}

export default categoryMongooseDao