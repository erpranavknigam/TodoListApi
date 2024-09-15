const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Corrected from 'timestamp' to 'timestamps'
});

// Middleware to hash password before saving user
UserSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        console.log('Hashing password:', this.password);
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        console.log('Hashed password:', this.password);
        next();
    } catch (ex) {
        next(ex);
    }
});


// Method to compare password
UserSchema.methods.comparePassword = async function(enteredPassword) {
    const salt = await bcrypt.genSalt(10);
    enteredPassword = await bcrypt.hash(enteredPassword, salt);
    console.log(enteredPassword,"\n", this.password)
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
