const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config');

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
    const user = await User.findOne({ email }).exec();
    if(!user) return done(null, false);

    user.comparePassword(password, (err, isMatch) => {
        if(err) return done(err);
        if(!isMatch) return done(null, false);

        return done(null, user);
    });
});

const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('bearer'),
    secretOrKey : config.secret
}
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
    const user = await User.findById(payload.sub).exec();
    if(user)
        done(null, user);
    else
        done(null, false);
})


passport.use(localLogin);
passport.use(jwtLogin);

module.exports = passport;