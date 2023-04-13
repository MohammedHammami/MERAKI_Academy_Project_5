const express = require("express");
const authentication=require('../middleware/authentication')
const {createNewNotification} = require("../controllers/notifications");

const craftsNotifications = express.Router();
craftsNotifications.post('/:order_id',authentication,createNewNotification)




module.exports = craftsNotifications;
