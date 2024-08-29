const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const DB="suzuki";
const MONGO_URI= "mongodb://mongo:27017"

mongoose.connect(`${MONGO_URI}/${DB}`,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log(" database connectioned successfully !"))
.catch((err)=>console.log("db connection failed !"))

const Redis = require('ioredis');
const redis = new Redis({
    host:'redis',
    port: 6379
});

redis.subscribe('userChannel',(err,count)=>{
    if(err){
        console.log("failed to subscribe !",err)
    }else{
        console.log(`subscribed successfully to ${count} channel`)
    }
})

const {addUser} = require("./src/controllers/secondUser.controllers.js");
redis.on("message",addUser)

const PORT =  4000;
app.listen(PORT, () => console.log(`Receiver Service running on port ${PORT}`));

