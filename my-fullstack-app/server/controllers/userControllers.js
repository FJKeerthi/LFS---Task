const userDB = require("../model/userModel");
const axios = require('axios');
const fs = require('fs');
const path = require('path');

exports.ImageUpload = async (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ error: "Username is required" });
    }

    try {
        // Check if user exists
        const preuser = await userDB.findOne({ username: username });
        if (preuser) {
            return res.status(400).json({ error: "This User already exists" });
        }

        // Request generated image from Flask
        const flaskResponse = await axios.get('http://localhost:5000/generate', {
            responseType: 'arraybuffer' // Get binary data
        });

        // Save generated image to server
        const filename = `${username}_${Date.now()}.png`;
        const filePath = path.join(__dirname, '../useruploads', filename);
        fs.writeFileSync(filePath, flaskResponse.data);

        // Save user data to MongoDB
        const userData = new userDB({
            username,
            userprofile: [filename], // Store as array, like before
        });

        await userData.save();

        res.status(200).json({
            message: "Image successfully generated and saved",
            userData,
        });

    } catch (error) {
        console.log("catch block", error);
        res.status(500).json({ error: "Something went wrong", details: error.message });
    }
};

exports.getUserdata = async (req, res) => {
    try {
        const getUsers = await userDB.find();
        res.status(200).json(getUsers);
    } catch (error) {
        console.log("catch block", error);
        res.status(500).json({ error: error.message });
    }
};
