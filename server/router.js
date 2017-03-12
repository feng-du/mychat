const authentication = require('./controllers/authentication');
const passport = require('./services/passport');

const requireSignin = passport.authenticate('local', { session: false });
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = app => {
    app.get('/verify', requireAuth, (req, res) => {
        const user = req.user;
        res.send({ id: user.id, email: user.email } );
    });

    app.post('/signin', requireSignin, authentication.signin);
    app.post('/signup', authentication.signup);
};