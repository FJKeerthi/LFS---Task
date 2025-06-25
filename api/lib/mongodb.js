const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    isConnected = true;
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};

module.exports = connectDB;
