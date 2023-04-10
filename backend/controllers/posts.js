const pool = require("../models/db");

const createNewPost = (req,res) => {
    const userId = req.token.userId
    const {title,description,pricing} = req.body

    pool
    .query(`INSERT INTO posts (title, description, user_id, pricing) VALUES ($1,$2,$3,$4)`,
    [title,description,userId,pricing])
    .then((result)=>{
        res.status(200).json({
            success: true,
            mesasge:"post created",
            post: result
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
    .query(`SELECT * FROM posts WHERE user_id = [${user_id}]`)
    .then((result)=>{
        res.status(200).json({
            success: true,
            mesasge:"get all posts from one user",
            posts: result
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
    pool
    .query(`UPDATE posts SET title = '[${title}]', description = '[${description}]', pricing = [${pricing}] WHERE id = [${id}]`)
    .then((result)=>{
        res.status(200).json({
            success: true,
            mesasge:"[post updated]",
            posts: result
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


module.exports = {
    createNewPost,

}