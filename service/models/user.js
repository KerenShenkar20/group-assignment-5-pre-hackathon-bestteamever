const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: { type: Number },
    first_name: { type: String },
    last_name: { type: String },
    email: {type: String, required:true },
    gender: {type: String, enum:['Male', 'Female'], required:true},
    avatar: {type: String },
    color: {type: String },
    job: {type: String, required:true },
}, { collection: 'users' });

const User = model('User', userSchema);

module.exports = User;