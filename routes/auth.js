
const express = require('express');
const router = express.Router();

// Hardcoded credentials
const hardcodedEmail = 'admin@example.com';
const hardcodedPassword = 'password123';

// Login Route
router.post('/auth/login', (req, res) => {
    const { email, password } = req.body;

    if (email === hardcodedEmail && password === hardcodedPassword) {
        // Normally you'd generate a real token here
        const fakeToken = 'hardcoded-jwt-token';
        res.json({ token: fakeToken });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
