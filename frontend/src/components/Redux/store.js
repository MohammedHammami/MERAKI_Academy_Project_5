import { configureStore } from "@reduxjs/toolkit";
import { authclice } from "./redusers/auth";
import { postSlice } from "./redusers/posts";
import {craftsSlice } from "./redusers/crafts";
export default configureStore ({
    reducer :{
        auth:  authclice.reducer,
        post:  postSlice.reducer,
        craft: craftsSlice.reducer
    }
})