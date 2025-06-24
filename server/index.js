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

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

//Authentication Routes - Add /api prefix for Vercel

app.post('/api/register' , (req,res) => {
   registerModel.create(req.body)
   .then(registration => res.json(registration))
   .catch(err => res.json(err)) 
})

app.post('/api/login', (req, res) => {
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
    res.status(200).json("server start")
});

// Catch-all handler for React app
app.get('*', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    } else {
        res.status(200).json({ message: "Server is running in development" });
    }
});

//server listen
app.listen(port, () => {
    console.log(`server start at port no ${port}`)
});

// Export for Vercel
module.exports = app;