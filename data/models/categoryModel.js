import mongoose, { Schema } from "mongoose";

const categoryCollection= "Category"

const categorySchema = new mongoose.Schema({
    name: {type: Schema.Types.String, required: true}
    },
    {timestamps: true}
)

const categoryModel = mongoose.model(categoryCollection, categorySchema)
export default categoryModel