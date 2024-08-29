
const moment = require('moment');
const SecondUser = require('../models/secondUser.models.js');

exports.addUser = async(channel,message)=>{
    const user = JSON.parse(message);
    const newUser = {
        ...user,
        modified_at:moment().toISOString()
    }
    try{
        const secondUser = new SecondUser(newUser);
        await secondUser.save();
        console.log("user saved successfully to  db");
    }
    catch(err){
        console.log("failed to save user")
    }
}
