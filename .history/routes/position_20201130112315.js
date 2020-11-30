const express = require('express');
const router = express.Router();
const controllers = require('../controllers/position');


router.post('/login', controllers.login);
router.post('/register', controllers.register);


module.exports = router;