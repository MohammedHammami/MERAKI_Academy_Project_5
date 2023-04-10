const express = require("express");

const { register, login , updateUserByEmail } = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
//new Hammami added
usersRouter.put("/:email", updateUserByEmail);

module.exports = usersRouter;
