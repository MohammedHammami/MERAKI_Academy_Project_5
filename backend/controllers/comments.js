const pool = require("../models/db")

const createNewComment = (req, res) =>{
    const postId = req.params.id
    const requester_user_id =  req.token.userId;
    const { description } = req.body

    const queryString = `INSERT INTO comments( description, user_id) VALUES ('${description}', ${requester_user_id}) RETURNING *;`

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

const getCommentsByUser = (req, res) =>{
    const userId = req.params.id
    const queryString = `SELECT * FROM comments WHERE user_id =${userId}`
    pool
        .query(queryString)
        .then((result)=>{
            res.status(200).json({
                success: true,
                message: `All comments for User: ${User_id}`,
                result: result.rows
            })
        })
        .catch((err)=>{
            res.status(500).json({
                success: false,
                message: "Server error",
                error :err
            })
        })
}

module.exports ={
    createNewComment,
    getCommentsByUser
}