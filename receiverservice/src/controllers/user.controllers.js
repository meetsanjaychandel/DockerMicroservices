const User = require("../models/user.models.js");
const {v4:uuidv4}= require('uuid');
const moment = require('moment');
const Redis = require('ioredis')
const redis = new Redis({
    host:'redis',
    port: 6379
});
const Joi = require('joi');

exports.receiveData = async(req,res)=>{

    const dataSchema = Joi.object({
        user: Joi.string().required(),
        class: Joi.string().required(),
        age: Joi.number().integer().required(),
        email: Joi.string().email().required(),
      });

    const {error,value} =dataSchema.validate(req.body);
    if(error) return res.status(400).send({error:error.details[0].message});

    const newUser = {
        id:uuidv4(),
        ...value,
        inserted_at:moment().toISOString()
    };
    try{
        const savedUser = new User(newUser);
        await savedUser.save();

        redis.publish('userChannel',JSON.stringify(newUser));
        res.status(201).json({success:true,message:"data recieved and saved to database successfully !"})

    }catch(err){
        console.log(err);
        res.status(500).json({success:false,message:"data insertion failed !"})
    }

}