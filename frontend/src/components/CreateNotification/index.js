import {useDispatch,useSelector } from "react-redux"
import React, { useEffect, useState } from 'react'

import axios from "axios"

const CreateNotification = () =>{
    const dispatch = useDispatch();
    
    const state = useSelector((state)=>{
        return{
          userId:state.auth.userId,
          token:state.auth.token,
        }
    })
    return(
        <div className='create-notification-container'>
          <p>i am CreateNotification</p>
        </div>
    )
}
export default CreateNotification