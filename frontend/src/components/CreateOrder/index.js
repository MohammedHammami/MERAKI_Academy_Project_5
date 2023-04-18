import {useDispatch,useSelector } from "react-redux"
import React, { useEffect, useState } from 'react'

import axios from "axios"
import {setCrafts} from "../Redux/reducers/crafts"
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


const CreateOrder = () =>{
    return(
        <div className="inpust-post">
         <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>schedule_date</Form.Label>

                <Form.Control type="date" placeholder="Enter Title"/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description order</Form.Label>

                <Form.Control as="textarea" rows={3} placeholder="Enter description"/>
            </Form.Group>
         </Form>
        <button >Submit</button>

         </div>
    )
}
export default CreateOrder