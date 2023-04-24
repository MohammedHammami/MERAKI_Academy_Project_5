const express = require("express");
const authentication=require('../middleware/authentication')
const {createNewNotification,getNotificationById} = require("../controllers/notifications");

const notificationsRouter = express.Router();
notificationsRouter.post('/:order_id',createNewNotification)
notificationsRouter.get('/',authentication,getNotificationById)




module.exports = notificationsRouter;
