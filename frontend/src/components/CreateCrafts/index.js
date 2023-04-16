import {useDispatch,useSelector } from "react-redux"
import React, { useEffect } from 'react'

import axios from "axios"
import {setCrafts} from "../Redux/redusers/crafts"

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

        </div>
    )
}
export default CreateCrafte