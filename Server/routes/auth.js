const { sign } = require('crypto');
const express = require('express');

const { signup, login} = require ('../controllers/auth.js');

const router = require.Router();

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;