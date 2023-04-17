import { createSlice } from "@reduxjs/toolkit";
export const authSlice=createSlice({
  name :'auth',
  initialState:{
    token :null,
    userId :null,
    isLoggedIn :false,
    userInfo:{}
  },
  reducers:{
    setLogin :(state,action)=>{
        state.token=action.payload
        state.isLoggedIn=true
        localStorage.setItem(state.token,'token')
        console.log('done token');
    },
    setUserId  :(state,action)=>{
        state.userId=action.payload
        
        localStorage.setItem(state.userId,'userId')
        console.log('done userId');

    },
    setLogout :(state)=>{
        state.token =null
        state.userId=null
        state.isLoggedIn=false
        localStorage.clear()
    },
    setUserInfo :(state,action)=>{
      state.userInfo = action.payload
    }
  }

})
export const {setLogin,
    setUserId,
    setLogout}=authSlice.actions
    
export default authSlice.reducer