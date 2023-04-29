import React, { useEffect, useState } from "react";
import "./Comment.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { setPooster } from "../Redux/reducers/auth";
const Comments = (s) => {
  
  const state = useSelector((state) => {
    
    return {
      token: state.auth.token,
      userInfo: state.auth.userInfo,
      userId: state.auth.userId,
      mood: state.Mood.mood,
      user_image: state.auth.user_image,
      pooster:state.auth.pooster
    };
  });
  const [comments, setComments] = useState([]);
  const [description, setDescription] = useState("");
  const [update, setUpdate] = useState(false);
  const token = state.token;
  const userId = state.value;
  const mood = state.mood;
  const user_image=state.user_image
  
  const getComment = () =>{
    console.log(state.pooster);
    axios
    .get(`http://localhost:5000/users/comments/${state.pooster}`)
    .then((result)=>{
      console.log(result);
      setComments(result.data.result)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:5000/comments/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data.result);
        const newresult = comments.filter((comment) => {
          return result.data.result.id !== comment.id;
        });

        console.log("newresult: ", newresult);
        setComments(newresult);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateComment = (id) => {
    axios
      .put(
        `http://localhost:5000/comments/${id}`,
        { description: description },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result.data.comment);
        const newComments = comments.map((comment) => {
          if (comment.id == result.data.comment[0].id) {
            comment.description = result.data.comment[0].description;
          }
          return comment;
        });
        setComments(newComments);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getComment()
  }, []);

  return (
    <div className="logos">
      {comments.map((comment,i)=>{
        if(comment.description!=""){
          return(
            <div className="logo comment" key={i}>
              <div style={{display:"flex"}}>
               <img
              src={comment.user_image }
              alt="Profile Pic"
              style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '20px', }}
            /><p style={{fontSize:"30px"}}>{comment.first_name}  {comment.last_name} says:</p></div>
              <p style={{fontSize:"40px"}}>{comment.description}</p>
              <p></p>
            </div>
          )
        }
        
      })}
    </div>
  );
};

export default Comments;
