import authMongooseDao from "../../data/dao/authMongooseDao.js"
import { examinePass, hashPass } from "../../shared/authAndHash.js"

class AuthManager{
    constructor(){
        this.dao = new authMongooseDao()
    }
    async registerMan(userName, email, password, profilePic){
        const hashedPass= await hashPass(password)
        const dto={
            userName,
            email,
            password: hashedPass,
            profilePic
        }
        return this.dao.registerDao(dto)
    }
    async emailUnique(email){
        return this.dao.oneEmail(email)
    }
    async loginMan(password, passwordSaved){
        const comparedPass= await examinePass(password, passwordSaved)
        return comparedPass
    }
    async logoutMan(){

    }
}

export default AuthManager