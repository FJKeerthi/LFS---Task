const mongoose = require("mongoose");

//setup user schema for user data
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userprofile: {
        type: [],
        required: true
    }
}, { timestamps: true });

//user model connected to users collection
const userDB = new mongoose.model("users", userSchema);

module.exports = userDB;