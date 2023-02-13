import mongoose from "mongoose";

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  blogBody: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  author:{
    type: String,
    required: true 
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

export default mongoose.model("Blog", BlogSchema);
