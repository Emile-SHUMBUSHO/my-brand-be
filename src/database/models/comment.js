import mongoose from "mongoose";

const Schema = mongoose.Schema;
const commentSchema = new Schema({
    fullName:{
        type: String,
        required: [true, "field is required"],
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required: [true, "field is required"],
    },
    comment:{
        type: String,
        required: [true, "field is required"],
    },
    date:{
        type: Date,
        default: Date.now(),
    },
    blog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
    },
});
export default new mongoose.model("Comment", commentSchema);