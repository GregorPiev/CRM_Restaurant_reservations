const express = require('express');
const router = express.Router();
const controllers = require('../controllers/auth');


router.get('/login', controllers.login);

module.exports = router;