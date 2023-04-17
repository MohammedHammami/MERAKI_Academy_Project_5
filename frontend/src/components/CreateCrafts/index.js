import {useDispatch,useSelector } from "react-redux"
import React, { useEffect, useState } from 'react'

import axios from "axios"
import {setCrafts} from "../Redux/redusers/crafts"
import Dropdown from 'react-bootstrap/Dropdown';


const CreateCraft = () =>{
    const [craft, setCraft] = useState({})

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

    const submitFn = ()=>{
      console.log(craft);
      axios
      .put(`http://localhost:5000/crafts/`,{craft_id:craft.id},{headers: {
        Authorization: ""
        }})
      .then((result)=>{
        console.log(result);
      })
      .catch((err)=>{
        console.log(err);
      })
    }

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
                  return (<Dropdown.Item onClick={()=>{setCraft(craft)}} key={id}>{craft.name}</Dropdown.Item>)
                })}
              </Dropdown.Menu>
            </Dropdown>
            <p>name user login</p>
            <p>phone user login</p>

            <button>Submit</button>

            <button onClick={submitFn}>Submit</button>


        </div>
    )
}
export default CreateCraft