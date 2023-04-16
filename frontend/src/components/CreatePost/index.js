import {useDispatch,useSelector } from "react-redux"
import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';


import axios from "axios"


const CreatePost = () =>{
    return(
        
        // <div className='create-post-container'>
        //     <input type="text" placeholder="title"/>
        //     <input type="text" placeholder="description"/>
        //     <input type="number" placeholder="pricing"/>
            
        // </div>
        <>
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
        </>
    )
}
export default CreatePost