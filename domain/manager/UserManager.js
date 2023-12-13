import userMongooseDao from "../../data/dao/userMongooseDao.js"
import { hashPass } from "../../shared/authAndHash.js"

class UserManager{
    constructor(){
        this.dao= new userMongooseDao()
    }
    async userUpdateMan(id, file, userName, hasshed, email){
        return this.dao.updateUser(id, file, userName, hasshed, email)
    }
    async findUser(id){
        return this.dao.userId(id)
    }
    async deleteUser(id){
        return this.dao.eraseUser(id)
    }
    async hashP(password){
        const hashed= await hashPass(password)
        return hashed
    }
}

export default UserManager