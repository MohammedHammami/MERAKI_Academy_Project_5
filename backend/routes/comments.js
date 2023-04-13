const express = require("express")
const {createNewComment, getCommentsByUser} = require("../controllers/comments")
const authentication = require("../middleware/authentication")

const commentsRouter = express.Router();

commentsRouter.post("/:id", authentication, createNewComment)
commentsRouter.get("/:id", authentication, getCommentsByUser)

module.exports = commentsRouter