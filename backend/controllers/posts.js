const { query } = require("express");
const pool = require("../models/db");

const createNewPost = (req,res) => {
    const userId = req.token.userId
    
    const {title,description,pricing} = req.body

    pool
    .query(`INSERT INTO posts (title, description, user_id, pricing) VALUES ($1,$2,$3,$4) RETURNING *`,
    [title,description,userId,pricing])
    .then((result)=>{
        res.status(200).json({
            success: true,
            mesasge:"post created",
            post: result.rows
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
const getPostsByuser = (req,res) => {
    const user_id = req.params.user_id
    pool
    .query(`SELECT * FROM posts WHERE user_id = ${user_id}`)
    .then((result)=>{
        res.status(200).json({
            success: true,
            mesasge:"get all posts from one user",
            posts: result.rows
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
const updatePostById = (req,res) => {
    const id = req.params.postId
    const {title,description,pricing} = req.body
    const data=[title||null,description||null,pricing||null,id]
    const query=`UPDATE posts SET title = COALESCE($1,title), description = COALESCE($2,description), pricing =COALESCE($3,pricing) WHERE id = $4 RETURNING *;`
    

    pool
    .query(query,data)
    .then((result)=>{
        res.status(200).json({
            success: true,
            mesasge:"[post updated]",
            posts: result.rows
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
const deletePostById = (req, res) =>{
    const postId = req.params.id
    const queryString = `DELETE FROM posts WHERE id = ${postId}`

    pool.
        query(queryString)
        .then((result)=>{
            res.status(200).json({
                success: true,
                massage: `Post with id: ${postId} deleted successfully`
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



module.exports = {
    createNewPost,
    getPostsByuser,
    updatePostById,
    deletePostById,
}