const express = require('express');
const { register, login, refreshToken, users } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
if (process.env.NODE_ENV !== 'production') {
    router.post('/register', register);
}
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.get('/users', authMiddleware, users);

module.exports = router;