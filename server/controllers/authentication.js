const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();

    const token = jwt.encode({
        sub: user.id,
        iat: timestamp
    }, config.secret);

    return token;
}

exports.signin = (req, res, next) => {
    // User has already had their email and password auth'd
    // just need to give them a token
    res.send({ token: tokenForUser(req.user) });
};

exports.signup = async (req, res, next) => {
    const { email, password } = req.body;

    // check params
    if(!email || !password)
        return res.status(422).send({error: 'You must provide email & password'});

    const existingUser = await User.findOne({ email }).exec();
    if(existingUser)
        return res.status(422).send({error: 'Emial is in use'});

    const user = new User({ email, password });
    await user.save();

    res.json({ token: tokenForUser(user) });
}