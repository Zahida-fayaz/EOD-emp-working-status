const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Pleaase enter user name"]
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters'],
    },
    mobilenumber: {
        type: String,
        required:[true,"Please enter mobile number"],
        minlength: [10, "enter 10 digit mobile number"],
        maxlength: [12, "Maximum 12 digit mobile number"],
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

//static method to login user
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
       const auth=await bcrypt.compare(password, user.password)
       if(auth){
        return user
       }
       throw Error('incorrect password')
    }
    throw Error('incorrect email')
}
module.exports = mongoose.model('User', userSchema)