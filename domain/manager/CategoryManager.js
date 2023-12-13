import categoryMongooseDao from "../../data/dao/categoryMongooseDao.js"
class CategoryManager{
    constructor(){
        this.dao= new categoryMongooseDao()
    }
    async getCategory(){
        return this.dao.getCategory()
    }
    async postCategory(data){
        return this.dao.postCategory(data)
    }
}

export default CategoryManager