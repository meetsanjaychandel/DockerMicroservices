const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:String,
    user:String,
    class:String,
    age:Number,
    email:String,
    inserted_at: Date
});

const User = new mongoose.model("User",userSchema);

module.exports= User;