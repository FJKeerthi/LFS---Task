const mongoose = require("mongoose");

// Setup mongoose connection for serverless
const DB = process.env.DATABASE;

let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        isConnected = true;
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
};

// For serverless environments, connect on each request
if (process.env.NODE_ENV === 'production') {
    // Don't auto-connect in production (serverless)
    module.exports = { connectDB };
} else {
    // Auto-connect in development
    connectDB().catch(console.error);
}