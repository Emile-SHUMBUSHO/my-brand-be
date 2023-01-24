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
  blogImage: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Blog", BlogSchema);
