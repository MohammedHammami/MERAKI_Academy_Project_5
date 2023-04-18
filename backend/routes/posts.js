const express = require("express");
const authentication=require('../middleware/authentication')
const authorization=require('../middleware/authorization')
const {
    createNewPost,
    getPostsByuser,
    updatePostById,
    deletePostById,
    getAllPosts
} = require("../controllers/posts");

const postsRouter = express.Router();

postsRouter.post('/',authentication,createNewPost)
postsRouter.get('/:user_id',authentication,getPostsByuser)
postsRouter.put('/:postId',authentication,updatePostById)
postsRouter.delete("/:id", authentication, deletePostById)
postsRouter.get('/',getAllPosts)


module.exports = postsRouter;
