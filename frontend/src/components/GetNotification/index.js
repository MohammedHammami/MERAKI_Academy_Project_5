import { useEffect, useState } from "react"
import "./style.css"
import axios from "axios"
import { useSelector } from "react-redux";

const GetAllNotification = ()=>{
    const state = useSelector((state) => {
        return {
            token:state.auth.token,
        };
      });
    const getNotifications = ()=>{
        axios
        .get(`http://localhost:5000/notifications`,{headers: {
            Authorization: state.token
            }})
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getNotifications()
    },[])
    return (
    <div className="all-notification-div">
        <p>i am all notification</p>
    </div>
    )
}

export default GetAllNotification