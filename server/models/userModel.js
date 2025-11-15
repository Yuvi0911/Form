import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    Contact: {
        type: String,
    },
    Email: {
        type: String,
    },
    Gender: {
        type: String,
    },
    image: {
        type: String,
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model("User", userSchema);

export default UserModel;