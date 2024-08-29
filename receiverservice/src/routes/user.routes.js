const {receiveData} = require("../controllers/user.controllers.js");

const Router = require('express');
const router = Router();

router.route("/adduser").post(receiveData);

module.exports= router;
