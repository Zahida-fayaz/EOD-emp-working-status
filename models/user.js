
const mongoose = require('mongoose');
// const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        // required: [true, "Pleaase enter user name"]
    },
    email: {
        type: String,
        // required: [true, 'Please enter an email'],
        // unique: true,
        // lowercase: true,
        // validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        // required: [true, 'Please enter a password'],
        // minlength: [6, 'Minimum password length is 6 characters'],
    },
    mobilenumber: {
        type: Number,
        // minlength: [10, "enter 10 digit mobile number"],
        // maxlength: 6
    },
    designation: {
        type: String
    },
    address: {
        type: String
    }
});

// fire a function before doc saved to db
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', userSchema);