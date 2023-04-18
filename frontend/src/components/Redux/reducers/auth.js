import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

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
        state.token=action.payload.token
        state.userId=action.payload.userId
        state.isLoggedIn=true
        localStorage.setItem(state.token,'token')
        localStorage.setItem(state.userId,'userId')

        console.log('done token and  _userId');
    },
    
    setLogout :(state)=>{
        state.token =null
        state.userId=null
        state.isLoggedIn=false
        localStorage.clear()
    },
    setUserInfo :(state,action)=>{
      state.userInfo = jwtDecode(action.payload.token)
      console.log('state.userInfo:',state.userInfo);
    }
  }

})
export const {setLogin,
    setLogout,setUserInfo}=authSlice.actions
    
export default authSlice.reducer