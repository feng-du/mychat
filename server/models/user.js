const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },
    nikename: { type: String },
    type: { type: String }
});

userSchema.pre('save', function(next) {
    const user = this
    bcrypt.hash(user.password, null, null, (err, hash) => {
        if(err) return next(err);

        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if(err) return callback(err);

        callback(null, isMatch);
    });
}

const Model = mongoose.model('user', userSchema);

module.exports = Model;
