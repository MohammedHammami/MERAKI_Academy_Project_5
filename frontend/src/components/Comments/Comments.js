import React, { useEffect, useState } from "react";
import "./Comment.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { setPooster } from "../Redux/reducers/auth";
import Card from "react-bootstrap/Card";
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
const Comments = (s) => {
  const state = useSelector((state) => {
    return {
      token: state.auth.token,
      userInfo: state.auth.userInfo,
      userId: state.auth.userId,
      mood: state.Mood.mood,
      user_image: state.auth.user_image,
      pooster: state.auth.pooster,
      userpostId: state.comments.userpostId,
    };
  });
  console.log(state.userpostId);
  const [comments, setComments] = useState([]);
  const [description, setDescription] = useState("");
  const [userpostId, setUserpostId] = useState(state.userpostId);

  const [update, setUpdate] = useState(false);
  const token = state.token;
  const userId = state.value;
  const mood = state.mood;
  const user_image = state.user_image;

  const getComment = () => {
    console.log(state.pooster);
    axios
      .get(`http://localhost:5000/comments/${userpostId}`, {
        headers: { Authorization: state.token },
      })
      .then((result) => {
        console.log(result.data.result);
        setComments(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
    getComment();
  }, []);
  return (
    <div className="all-orders-div">
      <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="8" lg="6">
            <MDBCard
              className="shadow-0 border"
              style={{ backgroundColor: "#c6c6c6" }}
            >
              <MDBCardBody >
                {comments.map((comment, i) => {
                  if (comment.description != "") {
                    return (
                      <div className="" key={i}>
                    <div>
                      
                        {/* <div style={{ display: "flex" }}> */}
                          <MDBCard className="mb-4 cardOrderBody">
                            <MDBCardBody>
                        <div className="d-flex flex-row align-items-center comment2">
                        <MDBCardImage
                        src={comment.user_image}
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                              
                              <p className="small mb-0 ms-2 comment2">{comment.first_name}{" "}{comment.last_name} </p></div>
                      <Card.Title>
                      <p className="small text-muted mb-0 comment2" style={{textAlign:'left'}}>
                                {comment.created_on &&
                                  comment.created_on.split("").splice(0, 10)}
                              </p>
                        </Card.Title>
                
                                  <p className="comment2" style={{color:'#0F1111'}}>{comment.description}</p>
                                  </MDBCardBody>
                                </MDBCard>
                                  </div>
                      </div>
                    );
                  }
                })}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Comments;
