const express = require("express");
const authentication=require('../middleware/authentication')

const {createNewOrder,updateOrderById,getOrderByReceiverId,getAllOrder} = require("../controllers/orders");

const orderRouter = express.Router();

orderRouter.post('/',authentication,createNewOrder)
orderRouter.put('/:order_id',authentication,updateOrderById)
orderRouter.get('/:user_id',authentication,getOrderByReceiverId)
// orderRouter.get('/',authentication,getAllOrder)

module.exports = orderRouter;