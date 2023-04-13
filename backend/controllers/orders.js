const pool = require("../models/db");

const createNewOrder = (req,res) => {
    const requester_user_id = req.token.userId
    console.log("ssss1",requester_user_id);
    const {schedule_date,order_desc,receiver_user_id} = req.body
    const data = [schedule_date || null, order_desc || null, requester_user_id || null,receiver_user_id||null,"1"]
    const query=`INSERT INTO orders (schedule_date, order_desc, requester_user_id,receiver_user_id, state_id) VALUES($1,$2,$3,$4,$5) RETURNING *;`
    pool
    .query(query,data)
    .then((result) => {
        res.status(200).json({
          success: true,
          message: "new order created",
          order: result.rows
        });
      })
      .catch((err) => {
        res.status(409).json({
          success: false,
          message: "server error",
          err:err.message,
        });
        console.log(err.message);
      });
}
const updateOrderById = (req,res) => {
    const id = req.params.order_id
    const {schedule_date,order_desc} = req.body
    const data=[schedule_date||null,order_desc||null]
    const query=`UPDATE orders SET schedule_date = COALESCE($1,schedule_date), order_desc = COALESCE($2,order_desc) WHERE id = ${id} RETURNING *;`
    pool
    .query(query,data)
    .then((result) => {
        res.status(200).json({
          success: true,
          message: "order update successfuly",
          order: result.rows
        });
      })
      .catch((err) => {
        res.status(409).json({
          success: false,
          message: "server error",
          err:err.message,
        });
        console.log(err.message);
      });
}
const getOrderById = (req,res) => {
    const {id} = req.body
    const query=`SELECT * FROM orders WHERE id = ${id};`
    pool
    .query(query)
    .then((result) => {
        res.status(200).json({
          success: true,
          message: "order get successfuly",
          order: result.rows
        });
      })
      .catch((err) => {
        res.status(409).json({
          success: false,
          message: "server error",
          err:err.message,
        });
        console.log(err.message);
      });
}
const getAllOrder = (req,res) => {
    const query=`SELECT * FROM orders`
    pool
    .query(query)
    .then((result) => {
        res.status(200).json({
          success: true,
          message: "orders get successfuly",
          order: result.rows
        });
      })
      .catch((err) => {
        res.status(409).json({
          success: false,
          message: "server error",
          err:err.message,
        });
        console.log(err.message);
      });
}
module.exports = {
    createNewOrder,
    updateOrderById,
    getOrderById,
    getAllOrder,
}