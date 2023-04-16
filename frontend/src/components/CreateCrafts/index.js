import {useDispatch,useSelector } from "react-redux"
import React, { useEffect } from 'react'

import axios from "axios"
import {setCrafts} from "../Redux/redusers/crafts"
import Dropdown from 'react-bootstrap/Dropdown';


const CreateCrafte = () =>{

    const dispatch = useDispatch();
    const state = useSelector((state)=>{
        return{
            crafts:state.craft.craft
        }
    })
    useEffect(() => {
        axios
        .get("http://localhost:5000/crafts")
        .then((result)=>{
            dispatch(setCrafts(result.data.result))
        })
        .catch((err)=>{
          console.log(err);
        })
        
      }, [])

    return(
        <div className='create-post-container'>
            {/* <p>i am a CreateCrafte componnent</p> */}
            <p>please Select your maintenance from list</p>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select your maintenance
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {state.crafts.map((craft,id)=>{
                  return (<Dropdown.Item key={id}>{craft.name}</Dropdown.Item>)
                })}
              </Dropdown.Menu>
            </Dropdown>
            <p>name user login</p>
            <p>phone user login</p>
            <button>submite</button>

        </div>
    )
}
export default CreateCrafte