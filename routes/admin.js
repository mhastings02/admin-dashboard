const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/users', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });

    const db = req.app.get('db');
    const result = await db.query('SELECT id, username, email, role, created_at FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
});

module.exports = router;
