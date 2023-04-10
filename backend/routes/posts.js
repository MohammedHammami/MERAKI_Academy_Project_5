const express = require("express");
const authentication=require('../middleware/authentication')

const {
    createNewPost,
    getPostsByuser,
    updatePostById,
} = require("../controllers/posts");

const postsRouter = express.Router();

postsRouter.post('/',authentication,createNewPost)
postsRouter.get('/:user_id',authentication,getPostsByuser)
postsRouter.put('/:postId',authentication,updatePostById)


module.exports = postsRouter;