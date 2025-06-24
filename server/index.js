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

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

//Authentication Routes - Add /api prefix for Vercel
app.post('/api/register', (req, res) => {
   registerModel.create(req.body)
   .then(registration => res.json(registration))
   .catch(err => res.status(400).json(err)) 
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
                res.status(401).json({error: "Password Is Incorrect"});
            }
        } else {
            res.status(404).json({error: "No Record Existed"});
        }
    })
    .catch(err => res.status(500).json({error: err.message}))
})

// Health check for API
app.get("/api/health", (req, res) => {
    res.status(200).json({message: "API is working", timestamp: new Date().toISOString()});
});

// Catch all handler: send back React's index.html file in production
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
} else {
    //start server
    app.get("/", (req, res) => {
        res.status(200).json("server start")
    });
}

// Only listen on port in development
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`server start at port no ${port}`)
    });
}

// Export for Vercel
module.exports = app;