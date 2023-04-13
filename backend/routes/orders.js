const express = require("express");
const authentication=require('../middleware/authentication')

const {createNewOrder,updateOrderById,getOrderById,getAllOrder} = require("../controllers/orders");

const orderRouter = express.Router();

orderRouter.post('/',authentication,createNewOrder)
orderRouter.put('/:order_id',authentication,updateOrderById)
orderRouter.get('/:id',authentication,getOrderById)
orderRouter.get('/',authentication,getAllOrder)

module.exports = orderRouter;