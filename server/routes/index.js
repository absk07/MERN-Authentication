const express = require('express');
const router = express.Router();

const { register, login, profile } = require('../controllers');
const verifyUser = require('../middlewares/verifyJWT');

router.post('/register', register);

router.post('/login', login);

router.get('/profile', verifyUser, profile);

module.exports = router;