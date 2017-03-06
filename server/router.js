const authentication = require('./controllers/authentication');
const passport = require('./services/passport');

const requireSignin = passport.authenticate('local', { session: false });
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = app => {
    app.get('/', requireAuth, (req, res) => {
        res.send({ message: 'Hi, there' });
    });

    app.post('/signin', requireSignin, authentication.signin);
    app.post('/signup', authentication.signup);
};