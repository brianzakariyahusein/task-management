const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Rute untuk registrasi dan login
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
