const mongoose = require("mongoose");

//setup report schema for report data
const reportSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    userprofile: {
        type: [],
        required: true
    }
}, { timestamps: true });

//report model connected to reports collection
const reportDB = new mongoose.model("reports", reportSchema);

module.exports = reportDB;