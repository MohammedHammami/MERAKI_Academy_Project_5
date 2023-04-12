const express = require("express");
const { getAllCrafts,updatecraftById } = require("../controllers/crafts");

const craftsRouter = express.Router();
craftsRouter.get("/",  getAllCrafts);
craftsRouter.put("/:id",  updatecraftById);



module.exports = craftsRouter;
