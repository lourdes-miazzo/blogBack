import mongoose, { Schema } from "mongoose";

const postCollection= "Post"

const postSchema = new mongoose.Schema({
    title: {type: Schema.Types.String, required: true},
    description: {type: Schema.Types.String, required: true},
    photo: {type: Schema.Types.String, required: false},
    userName: {type: Schema.Types.String, required: true},
    category: {type: Schema.Types.Array, required: false}
    },
    {timestamps: true}
)

const postModel = mongoose.model(postCollection, postSchema)
export default postModel