const mongoose = require('mongoose');

const secondUserSchema = new mongoose.Schema({
    id: String,
    user: String,
    class: String,
    age: Number,
    email: String,
    inserted_at: Date,
    modified_at: Date,
  });
  
const SecondUser = new mongoose.model('SecondUser', secondUserSchema);
module.exports =SecondUser;
  