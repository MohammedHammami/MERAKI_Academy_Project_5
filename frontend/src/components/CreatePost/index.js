import "./style.css"
import {useDispatch,useSelector } from "react-redux"


import React, { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form';


import axios from "axios"


const CreatePost = () =>{
  const state = useSelector((state) => {
    return {
	    token:state.auth.token,
    };
  });
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [pricing, setPricing] = useState("")
    const [image,setImage] = useState(" ")
    const submitFn = ()=>{
        axios
        .post(`http://localhost:5000/posts`,{title,description,pricing,post_image:image},{headers: {
          Authorization: state.token
          }})
        .then((result)=>{
          console.log(result.data);
        })
        .catch((err)=>{
          console.log(err);
        })
      }

    return(
        <div className="inpust-post">
         <Form>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>take image from your device</Form.Label>
                <Form.Control type="file" onChange={(e)=>{setImage(e.target.value)}}/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>

                <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>{setTitle(e.target.value)}}/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>

                <Form.Control as="textarea" rows={3} placeholder="Enter description" onChange={(e)=>{setDescription(e.target.value)}}/>
            </Form.Group>
         </Form>
         <p>pricing : <input type="number" onChange={(e)=>{setPricing(e.target.value)}} placeholder="pricing"/></p>
         
            <button onClick={submitFn}>Submit</button>

         </div>
    )
}
export default CreatePost