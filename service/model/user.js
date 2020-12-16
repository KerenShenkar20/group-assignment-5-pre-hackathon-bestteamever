const { Schema, model } = require("mongoose");
// const addressShema = new Schema({
//     lng: { type: Number },
//     lat: { type: Number }
// })
const UserSchema = new Schema({
    id: { type: Number },
    first_name: { type: String },           ///,required: true
    last_name:{ type:String},
    email:{type:String},
    gender:{type:String},
    avatar:{type:String},
    color:{type:String},
    job:{type:String}
}, { conection: "users" });
const User = model("User", UserSchema);

module.exports = User;