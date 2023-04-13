import { configureStore } from "@reduxjs/toolkit";
import { authclice } from "./redusers/auth";
export default configureStore ({
    reducer :{
        auth:  authclice.reducer,
    }
})