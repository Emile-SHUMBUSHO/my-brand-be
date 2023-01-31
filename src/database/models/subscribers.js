import mongoose from "mongoose";

const SubscribersShema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Subscribers", SubscribersShema);