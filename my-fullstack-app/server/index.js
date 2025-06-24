require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const cors = require("cors");
const port = process.env.PORT || 4006;
const registerModel = require("./model/registerModel")

app.use(cors());
app.use(express.json());

// Serve static files from React build (for production)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

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


//start server
app.get("/", (req, res) => {
    res.status(200).json("WeatherView server is running")
});

// Health check endpoint for Railway
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", message: "Server is healthy" });
});

// Catch all handler for React routes (production only)
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

//server listen
app.listen(port, () => {
    console.log(`WeatherView server running on port ${port}`)
});