const connectDB = require('./lib/mongodb');
const Register = require('./models/Register');

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectDB();
    
    const { email, password } = req.body;
    const user = await Register.findOne({ email });
    
    if (user) {
      if (user.password === password) {
        const { password, ...userData } = user.toObject();
        res.json({ status: "Success", user: userData });
      } else {
        res.status(401).json({ error: "Password Is Incorrect" });
      }
    } else {
      res.status(404).json({ error: "No Record Existed" });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: error.message });
  }
};
