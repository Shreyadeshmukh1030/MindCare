const jwt = require('jsonwebtoken');
const pool = require('./db');
require('dotenv').config();

const authenticateToken = async (req, res, next) => {
  // Get token from header OR localStorage name mismatch
  let token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    // Fallback for frontend localStorage names
    token = req.headers['x-access-token'] || req.query.token;
  }
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [decoded.id]);
    if (!rows[0]) return res.status(403).json({ error: 'User not found' });
    req.user = rows[0];
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = { authenticateToken };
