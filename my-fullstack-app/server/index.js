require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const port = 4006;
const registerModel = require("./model/registerModel")

app.use(cors());
app.use(express.json());

//Authentication Routes

app.post('/register' , (req,res) => {
   registerModel.create(req.body)
   .then(registration => res.json(registration))
   .catch(err => res.json(err)) 
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    registerModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                // Return user data without password
                const { password, ...userData } = user.toObject();
                res.json({status: "Success", user: userData});
            } else {
                res.json("Password Is Incorrect");
            }
        } else {
            res.json("No Record Existed");
        }
    })
})


// get images from useruploads folder
app.use("/uploads", express.static("./useruploads"));


//get images from userdownloads folder
app.use("/downloads", express.static("./userdownloads"));

// user routes used for get user data and upload images
const userRoutes = require("./routes/userAuthRoutes");
app.use("/user/api", userRoutes);

// report routes used for get reports and download images
const reportRoutes = require("./routes/userAuthRoutes");
app.use("/report/api", reportRoutes);

//start server
app.get("/", (req, res) => {
    res.status(200).json("server start")
});

//server listen
app.listen(port, () => {
    console.log(`server start at port no ${port}`)
});