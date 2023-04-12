const express=require('express')
const {createNewReviews}=require('../controllers/reviws')
const authentication=require('../middleware/authentication')

const reviewRouter=express.Router()

reviewRouter.post('/', authentication,createNewReviews)

module.exports=reviewRouter