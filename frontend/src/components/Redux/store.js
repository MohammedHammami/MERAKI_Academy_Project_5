import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./reducers/auth";
import { postSlice } from "./reducers/posts";
import {craftsSlice } from "./reducers/crafts";
import {orderSlice } from "./reducers/order";
import {notificationSlice } from "./reducers/notification";

export default configureStore ({
    reducer :{
        auth:  authSlice.reducer,
        post:  postSlice.reducer,
        craft: craftsSlice.reducer,
        order: orderSlice.reducer,
        notification: notificationSlice.reducer
    }
})