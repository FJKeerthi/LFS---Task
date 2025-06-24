const mongoose = require("mongoose");

//setup mongoose connection
const DB = process.env.DATABASE || "mongodb://localhost:27017/weatherview";

mongoose.connect(DB)
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Database connection error:", err))