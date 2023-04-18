const pool = require("../models/db")

const createNewComment = (req, res) =>{
    
    const requester_user_id =  req.token.userId;
    const { description } = req.body
console.log('requester_user_id:',requester_user_id);
console.log('description:',description);
    const queryString = `INSERT INTO comments( description, requester_user_id) VALUES ('${description}', ${requester_user_id}) RETURNING *;`

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
    console.log(userId);
    const queryString = `SELECT * FROM comments WHERE user_id = ${userId};`
    pool
        .query(queryString)
        .then((result)=>{
            res.status(200).json({
                success: true,
                message: `All comments for User: ${userId}`,
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

const deleteCommentById = (req, res) =>{
    const id =  req.params.id 
    const queryString = `DELETE FROM comments where id = ${id};`

    pool
        .query(queryString)
        .then((result)=>{   
            res.status(204).json({
                success: true,
                massage: `comment with id: ${id} deleted successfully`
            })
        })
        .catch((err)=>{
            res.status(500).json({
                success: false,
                message: "Server error",
                error : err
            })              
        })
}

module.exports ={
    createNewComment,
    getCommentsByUser,
    deleteCommentById
}