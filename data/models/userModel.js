import mongoose, { Schema } from "mongoose";

const userCollection= "Users"

const userSchema = new mongoose.Schema({
    userName: {type: Schema.Types.String, required: true, unique:true},
    email: {type: Schema.Types.String, required: true, unique: true},
    password: {type: Schema.Types.String, required: true},
    profilePic: {type: Schema.Types.String, default: null}
    },
    {timestamps: true}
)

const userModel = mongoose.model(userCollection, userSchema)
export default userModel