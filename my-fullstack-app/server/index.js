require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const cors = require("cors");
const port = process.env.PORT || 4006;
const registerModel = require("./model/registerModel")

// Configure CORS for production
const corsOptions = {
    origin: process.env.NODE_ENV === 'production' 
        ? true  // Allow all origins in production (Railway will handle this)
        : ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from React build (for production)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// API Routes (these must come before the catch-all route)
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

// Health check endpoint for Railway
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", message: "Server is healthy" });
});

// API status endpoint
app.get("/api/status", (req, res) => {
    res.status(200).json({ 
        status: "OK", 
        message: "WeatherView API is running",
        environment: process.env.NODE_ENV || 'development'
    });
});

// Serve React app (this must be last)
if (process.env.NODE_ENV === 'production') {
    // Handle React routing, return all requests to React app
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
} else {
    // Development mode - just show server status
    app.get("/", (req, res) => {
        res.status(200).json("WeatherView server is running in development mode")
    });
}

//server listen
app.listen(port, () => {
    console.log(`WeatherView server running on port ${port}`)
});