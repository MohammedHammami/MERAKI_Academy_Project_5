import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

const Comments = () => {
  const state = useSelector((state) => {
    return {
	    token:state.auth.token,
      userInfo:state.auth.userInfo
    }
  });
  const [comments, setComments] = useState([]);
  const [description, setDescription] = useState('')
  const token = state.token
  
  const getComment = (id) => {
    
    axios
      .get(`http://localhost:5000/comments/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        // console.log(result.data.result);
        setComments(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const CreateComment = (receiver_user_id) => {
    
    axios
      .post(`http://localhost:5000/comments/${receiver_user_id}`,{description: description }, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data.result);
        setComments(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log('state.userInfo',state.userInfo.first_name
    );
    getComment(3);
  }, []);

  return (
    <div>
      <h1>COMMENT</h1>
      <div>
      <input type="text" placeholder="youer comment" onChange={(e)=>{
        setDescription(e.target.value)
      }}></input>
      <button onClick={()=>{CreateComment(3)}}>send </button>

      </div>
      <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="8" lg="6">
            <MDBCard
              className="shadow-0 border"
              style={{ backgroundColor: "#f0f2f5" }}
            >
              <MDBCardBody>
                <MDBInput wrapperClass="mb" placeholder="Type comment..." label="+ Add youer comment"onChange={(e)=>{
                  console.log(e.target.value);
          setDescription(e.target.value)
        }} />
                <button onClick={()=>{CreateComment(3)}}>send </button>
              <MDBCard className="mb-4">
                {console.log(comments)}d
                {comments && comments.map(comment =>{
                  return (
                  <div key={comment.id}>
                  <MDBCardBody>
                    {console.log(comment.description)}
                  <p>{comment.description}</p>
      
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">{state.userInfo.first_name}</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                    
                      
                    
                    </div>
                  </div>

      </MDBCardBody></div>
      )
                })}
                
    </MDBCard>
              </MDBCardBody>
      </MDBCard>
          </MDBCol>
      </MDBRow>
     </MDBContainer>
    </div>
  );
};

export default Comments;
