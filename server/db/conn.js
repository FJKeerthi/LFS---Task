const mongoose = require("mongoose");

//setup mongoose connection
const DB = process.env.DATABASE

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("database connected")).catch((err) => console.log("error", err))