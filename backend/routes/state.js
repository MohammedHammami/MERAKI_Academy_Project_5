const express = require("express");
const {getstate}=require('../controllers/state')
const authentication=require('../middleware/authentication')

const stateRouter=express.Router()

stateRouter.get('/:id',authentication,getstate)

module.exports=stateRouter