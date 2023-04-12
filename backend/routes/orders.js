const express = require("express");
const authentication=require('../middleware/authentication')

const {createNewOrder} = require("../controllers/orders");

const orderRouter = express.Router();

orderRouter.post('/',authentication,createNewOrder)

module.exports = orderRouter;