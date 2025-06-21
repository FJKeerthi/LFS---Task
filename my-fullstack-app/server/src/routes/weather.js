const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/current/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
