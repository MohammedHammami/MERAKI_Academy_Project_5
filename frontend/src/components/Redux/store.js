import { configureStore } from "@reduxjs/toolkit";
import { authclice } from "./redusers/auth";
import { postSlice } from "./redusers/posts";
export default configureStore ({
    reducer :{
        auth:  authclice.reducer,
        post:  postSlice.reducer,
    }
})