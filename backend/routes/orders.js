const express = require("express");
const authentication=require('../middleware/authentication')

const {createNewOrder,updateOrderById} = require("../controllers/orders");

const orderRouter = express.Router();

orderRouter.post('/',authentication,createNewOrder)
orderRouter.put('/',authentication,updateOrderById)

module.exports = orderRouter;