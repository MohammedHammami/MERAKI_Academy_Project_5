import {useDispatch,useSelector } from "react-redux"
import React, { useEffect, useState } from 'react'

import axios from "axios"
const CreateNotification = () =>{
    const dispatch = useDispatch();
    const state = useSelector((state)=>{
        return{
          userId:state.auth.userId,
          token:state.auth.token,
          // we need to add new  variable in redux this varibale will get for us the order_id_created
          orderId:"8"
        }
    })
    useEffect(() => {
      axios
      .post(`http://localhost:5000/notifications/${state.orderId}`,{description:"this is descript noti",},{headers: {
        Authorization: state.token
        }})
      .then((result)=>{
          console.log(result);
      })
      .catch((err)=>{
        console.log(err);
      })
      
    }, [])
    return(
        <div className='create-notification-container'>
          <p>i am CreateNotification</p>
        </div>
    )
}
export default CreateNotification