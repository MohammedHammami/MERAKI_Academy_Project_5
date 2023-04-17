import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./redusers/auth";
import { postSlice } from "./redusers/posts";
import {craftsSlice } from "./redusers/crafts";
import {orderSlice } from "./redusers/order";
export default configureStore ({
    reducer :{
        auth:  authSlice.reducer,
        post:  postSlice.reducer,
        craft: craftsSlice.reducer,
        order: orderSlice.reducer
    }
})