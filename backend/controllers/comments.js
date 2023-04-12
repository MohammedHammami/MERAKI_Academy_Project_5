const pool = require("../models/db")

const createNewComment = (req, res) =>{
    const requester_user_id =  req.token.userId;
    const { description } = req.body

    const queryString = `INSERT INTO comments( description, requester_user_id) VALUES ('${description}', ${requester_user_id});`

    pool
        .query(queryString)
        .then((result)=>{
            res.status(201).json({
                success: true,
                message: "Comment created successfully",
                result: result.rows
            })
        })
        .catch((err)=>{
            res.status(500).json({
                success: false,
                message: "Server error",
                error: err
            })
        })
}

module.exports ={
    createNewComment,
}