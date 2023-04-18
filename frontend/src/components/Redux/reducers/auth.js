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
        localStorage.setItem('token',state.token)
        localStorage.setItem('userId',state.userId)

        console.log('done token and  _userId');
    },
    setLoginGoogel :(state,action)=>{
      state.token=action.payload.credential
      state.userId=action.payload.clientId
      state.isLoggedIn=true
      // localStorage.setItem('token',state.token)
      // localStorage.setItem('userId',state.userId)
console.log('state.userId:',state.userId);
console.log('state.token:',state.token);
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
export const {setLogin,setLogout,setUserInfo,setLoginGoogel}=authSlice.actions
    
export default authSlice.reducer