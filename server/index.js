require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4006;

app.use(cors());
app.use(express.json());

// Initialize database connection
let mongoose;
let registerModel;

try {
    mongoose = require("mongoose");
    registerModel = require("./model/registerModel");
    require("./db/conn");
} catch (error) {
    console.error("Database setup error:", error);
}

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'API is working' });
});

//Authentication Routes - Add /api prefix for Vercel
app.post('/api/register', (req, res) => {
    if (!registerModel) {
        return res.status(500).json({ error: 'Database not initialized' });
    }
    
    registerModel.create(req.body)
        .then(registration => res.json(registration))
        .catch(err => res.status(400).json({ error: err.message }));
});

app.post('/api/login', (req, res) => {
    if (!registerModel) {
        return res.status(500).json({ error: 'Database not initialized' });
    }
    
    const { email, password } = req.body;
    registerModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // Return user data without password
                    const { password, ...userData } = user.toObject();
                    res.json({ status: "Success", user: userData });
                } else {
                    res.status(401).json({ error: "Password Is Incorrect" });
                }
            } else {
                res.status(404).json({ error: "No Record Existed" });
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});


//start server
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is running", timestamp: new Date().toISOString() });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

// Export for Vercel
module.exports = app;