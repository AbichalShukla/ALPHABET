const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; // Replace with your secret key
 

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  console.log("Token received: ", token); // Log the token received

  if (!token) { 
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("Decoded Token: ", decoded); 
    req.user = decoded;
    next();
  } catch (ex) {
    console.error("Token verification failed: ", ex);
    res.status(400).json({ error: 'Invalid token.' });
  }
};





module.exports = auth;
