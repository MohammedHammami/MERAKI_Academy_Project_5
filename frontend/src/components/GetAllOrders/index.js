import { useEffect, useState } from "react"
import {useDispatch,useSelector } from "react-redux"
import {setOrder} from "../Redux/reducers/order"
import "axios"
import "./style.css"
import axios from "axios"

const GetAllOrders = ()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        axios
        .get(`http://localhost:5000/orders/`)
        .then((result)=>{
            console.log(result);
            dispatch(setOrder(result.data.result))
        })
        .catch((err)=>{
          console.log(err);
        })
    }, [])
    
    return (
    <div className="all-orders-div">
        <p>i am here</p>
    </div>
    )
}

export default GetAllOrders