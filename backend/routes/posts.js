const express = require("express");
const authentication=require('../middleware/authentication')

const {
    createNewPost,
    getPostsByuser,
    updatePostById,
    deletePostById
} = require("../controllers/posts");

const postsRouter = express.Router();

postsRouter.post('/',authentication,createNewPost)
postsRouter.get('/:user_id',authentication,getPostsByuser)
postsRouter.put('/:postId',authentication,updatePostById)
postsRouter.delete("/:id", authentication, deletePostById)


module.exports = postsRouter;