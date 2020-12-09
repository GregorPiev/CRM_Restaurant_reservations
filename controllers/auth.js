const colors = require('colors');
colors.setTheme({
    info: 'bgGreen',
    help: 'cyan',
    warn: 'yellow',
    success: 'bgBlue',
    error: 'red',
    log: 'orange'
});

const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const { body, validationResult } = require("express-validator")
const errorHandle = require('../utils/errorHandler')

module.exports.login = async function (req, res) {
    try {
        console.log('Users values'.warn)
        console.log(req.body.email)
        const candidat = await User.findOne({ email: req.body.email })
        if (candidat) {
            //Check password
            const passwordResult = bcrypt.compareSync(req.body.password, candidat.password);
            if (passwordResult) {
                //Generating token
                const token = jwt.sign({
                    email: candidat.email,
                    userId: candidat._id
                }, keys.JWT, { expiresIn: 60 * 60 });
                res.status(200).json({ token: `Bearer ${token}` });
            } else {
                res.status(401).json({ message: 'Invalid user\' values' })
            }
        } else {
            //Not found
            res.status(404).json({ message: 'User not exist' });
        }
    } catch (err) {
        console.log('Server Error:', err.message);
        res.status(500).json({ message: 'Error' });
    }
}

module.exports.register = async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() })
    }
    try {
        const candidate = await User.findOne({ email: req.body.email });
        if (candidate) {
            return res.status(409).json({ message: 'User with this email exist already' });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = req.body.password;


        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(hashPassword, salt)
        })

        try {
            user.save();
            console.log('User created')
            res.status(201).json(user)
        } catch (err) {
            res.status(501).json({ message: `Error by create user: ${err}` })
            console.log(`Error by create user: ${err}`)
        }


    } catch (err) {
        console.log('Server error')
        errorHandle(res, err);
    }
}

