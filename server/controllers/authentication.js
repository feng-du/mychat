const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();

    const token = jwt.encode({
        sub: user.id,
        iat: timestamp,
        user: { 
            name: user.nikename,
            type: user.type
        }
    }, config.secret);

    return token;
}

exports.signin = (req, res, next) => {
    // User has already had their email and password auth'd
    // just need to give them a token
    const { user } = req;
    res.send({ token: tokenForUser(user), user: { id: user.id, name: user.nikename } });
};

exports.signup = async (req, res, next) => {
    const { email, password } = req.body;

    // check params
    if(!email || !password)
        return res.status(422).send({error: 'You must provide email & password'});

    const existingUser = await User.findOne({ email }).exec();
    if(existingUser)
        return res.status(422).send({error: 'Emial is in use'});

    const user = new User({ 
        email, 
        password, 
        type: 'local', 
        nikename: email.substr(0, email.indexOf('@')) 
    });
    await user.save();

    res.json({ token: tokenForUser(user), user: { id: user.id, name: user.nikename } });
}