import {useDispatch,useSelector } from "react-redux"
import React, { useEffect, useState } from 'react'

import axios from "axios"
import Form from 'react-bootstrap/Form';


const CreateOrder = () =>{
    const state = useSelector((state) => {
        return {
            token:state.auth.token,
        };
      });
    const [schedule_date, setSchedule_date] = useState("")
    const [order_desc, setOrder_desc] = useState("")
    const [receiver_user_id,setReceiver_user_id] = useState(4)

    const submitFn = ()=>{
        console.log(localStorage.getItem("token"));
        axios
        .post(`http://localhost:5000/orders`,{schedule_date,order_desc,receiver_user_id},{headers: {
            Authorization: state.token
            }})
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div className="inpust-post">
         <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>schedule_date</Form.Label>
                <Form.Control type="date" placeholder="Enter Title" onChange={(e)=>{setSchedule_date(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description order</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter description" onChange={(e)=>{setOrder_desc(e.target.value)}}/>
            </Form.Group>
         </Form>
        <button onClick={submitFn}>Submit</button>
         </div>
    )
}
export default CreateOrder