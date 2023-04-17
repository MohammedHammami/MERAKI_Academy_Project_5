import "./style.css"
import {useDispatch,useSelector } from "react-redux"
import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';


import axios from "axios"


const CreatePost = () =>{
    return(
        <div className="inpust-post">
         <Form>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>take image from your device</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter description"/>
            </Form.Group>
         </Form>
         <p>pricing : <input type="number"/></p>
         
            <button>submite</button>
         </div>
    )
}
export default CreatePost