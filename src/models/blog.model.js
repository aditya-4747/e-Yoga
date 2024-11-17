import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        reqiured: true
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true} );

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);