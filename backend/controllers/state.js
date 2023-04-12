const pool =require('../models/db')

const getstate = (req,res) => {
    const order_id = req.params.id
    pool
    .query(`SELECT state_id FROM state WHERE order_id = ${order_id}`)
    .then((result)=>{
        res.status(200).json({
            success: true,
            mesasge:"get state from one user",
           state: result.rows
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success: false,
            message: "Server Error",
            err: err.message
        })
        console.log(err);
    })
}
module.exports={
    getstate
}