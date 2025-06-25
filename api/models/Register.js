const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.models.Register || mongoose.model('Register', registerSchema);
