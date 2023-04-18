import { createSlice } from "@reduxjs/toolkit";
export const authSlice=createSlice({
  name :'auth',
  initialState:{
    token :null,
    userId :null,
    isLoggedIn :false
  },
  reducers:{
    setLogin :(state,action)=>{
        state.token=action.payload
        state.isLoggedIn=true
        localStorage.setItem('token',state.token)
        console.log('done token');
    },
    setUserId  :(state,action)=>{
        state.userId=action.payload
        
        localStorage.setItem('userId',state.userId)
        console.log('done userId');

    },
    setLogout :(state)=>{
        state.token =null
        state.userId=null
        state.isLoggedIn=false
        localStorage.clear()
    }
  }

})
export const {setLogin,
    setUserId,
    setLogout}=authSlice.actions
    
export default authSlice.reducer