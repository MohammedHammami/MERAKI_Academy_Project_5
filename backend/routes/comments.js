const express = require("express")
const {createNewComment} = require("../controllers/comments")
const authentication = require("../middleware/authentication")
const commentsRouter = express.Router

commentsRouter.post("/:id", authentication, createNewComment)


module.export = commentsRouter