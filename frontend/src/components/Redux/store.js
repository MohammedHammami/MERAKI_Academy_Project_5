import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./redusers/auth";
export default configureStore ({
    reducer :{
        auth:  authSlice.reducer,
    }
})