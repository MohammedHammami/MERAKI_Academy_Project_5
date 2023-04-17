import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./redusers/auth";
import { postSlice } from "./redusers/posts";
import {craftsSlice } from "./redusers/crafts";
export default configureStore ({
    reducer :{
        auth:  authSlice.reducer,
        post:  postSlice.reducer,
        craft: craftsSlice.reducer
export default configureStore ({
    reducer :{
        auth:  authSlice.reducer,
    }
})