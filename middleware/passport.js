const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

const colors = require('colors');
colors.setTheme({
    info: 'bgGreen',
    help: 'cyan',
    warn: 'yellow',
    success: 'bgBlue',
    error: 'red',
    log: 'orange'
});


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.JWT
}

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, async (paylod, done) => {
            console.log('Passport use. Payload:'.warn);
            console.log(paylod)
            const user = await User.findById(paylod.userId).select('email id');
            try {
                if (user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (e) {
                console.log('Done error:', e)
            }

        })
    )
}