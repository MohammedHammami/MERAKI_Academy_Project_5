const pool = require("../models/db")

const createNewComment = (req, res) =>{
const receiver_user_id =req.params.id
    const requester_user_id =  req.token.userId;
    const { description } = req.body
    const data =[description,requester_user_id,receiver_user_id]
    const queryString = `INSERT INTO comments( description, requester_user_id,receiver_user_id) VALUES ($1, $2,$3) RETURNING *;`

    pool
        .query(queryString,data)
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
    const queryString = `SELECT * FROM comments WHERE receiver_user_id = ${userId};`
    
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
        .query( ` SELECT * FROM "comments" WHERE id=${id}`)
        .then((result1)=>{ 
         if (result1.rows.length==0) {
            console.log(60);
            res.status(404).json({
                success: false +'5',
                message: `comment with id: ${id} Not Found`,
                
            }) 
         }else {
            pool
            .query(queryString)
            .then((result)=>{   
                res.status(202).json({
                    success: true,
                    massage: `comment with id: ${id} deleted successfully`,
                    result:result1.rows[0]
                })
            })
            .catch((err)=>{
                res.status(500).json({
                    success: false+ '6',
                    message: "Server error",
                    error : err
                })              
            })
         }
        })
        .catch((err)=>{
            res.status(500).json({
                success: false,
                message: "Server error",
                error : err
            })    })       
}

module.exports ={
    createNewComment,
    getCommentsByUser,
    deleteCommentById
}