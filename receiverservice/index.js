const mongoose = require('mongoose');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require("./src/routes/user.routes.js")

const app = express();
app.use(bodyParser.json());
app.use(cors());

const DB="suzuki";
const MONGO_URI= "mongodb://mongo:27017"
mongoose.connect(`${MONGO_URI}/${DB}`,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log(" database connectioned successfully !"))
.catch((err)=>console.log("db connection failed !"))

app.use("/",userRoutes)

const PORT =  3000;
app.listen(PORT, () => console.log(`Receiver Service running on port ${PORT}`));