import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
    name:'notification',
    initialState:{
        notifications:[]
    },
    reducers:{
        setNotification:(state,action)=>{
            state.notifications = action.payload;
        }
    }

})

export const {setNotification} = notificationSlice.actions
export default notificationSlice.reducers
