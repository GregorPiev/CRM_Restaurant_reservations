const express = require('express');
const router = express.Router();
const controllers = require('../controllers/auth');
const { body, validationResult } = require("express-validator")


router.post('/login', controllers.login);
router.post('/register', [
    body('email', "Please enter value").not().isEmpty(),
    body('email', "Please enter valid email value").isEmail(),
    body('password', "Please enter value").exists(),
    body('password', "Please enter minimum 6 symvols").isLength({ min: 6 }),
],
    controllers.register);


module.exports = router;