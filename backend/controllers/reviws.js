const pool =require('../models/db')
const createNewReviews = (req,res) => {
    const requester_user_id = req.token.userId
    console.log();
    const {rate,
        receiver_user_id,
        order_id} = req.body

    pool
    .query(`INSERT INTO reviews (rate,
        receiver_user_id,
        order_id, requester_user_id) VALUES ($1,$2,$3,$4) RETURNING *`,
    [rate,
        receiver_user_id,
        order_id,requester_user_id])
    .then((result)=>{
        res.status(200).json({
            success: true,
            mesasge:"review created",
            reviews: result.rows
          })
    })
    .catch((err)=>{
        res.status(500).json({
            success: false,
            message: "Server Error",
            err: err.message
          })
    })
}

module.exports={
    createNewReviews
}