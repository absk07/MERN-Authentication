const express = require('express');
const router = express.Router();

const { register, login, profile } = require('../controllers');
const verifyUser = require('../middlewares/verifyJWT');

router.post('/api/register', register);

router.post('/api/login', login);

router.get('/api/profile', verifyUser, profile);

module.exports = router;