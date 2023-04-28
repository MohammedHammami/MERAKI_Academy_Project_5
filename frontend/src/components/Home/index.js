import React from "react";
import axios from "axios";
import "./index.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPost } from "../Redux/reducers/posts";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const Home = () => {
  const navigate = useNavigate();
  const getAllPosts = () => {
    axios
      .get("http://localhost:5000/posts/")
      .then((res) => {
        dispatch(setPost(res.data.posts));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      posts: state.post.posts,
    };
  });
  const toOrder = (id, user_id) => {
    navigate("/CreateOrder", { state: { id, user_id } });
  };

  return (
    <>
      <header style={{ paddingLeft: 0 }}>
        <div
          id="pic"
          className="p-5 text-center bg-image mt-2"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/d3/8b/ef/d38bef8a67263e30642165a11965555f.jpg')",
            height: "93vh",
            width: "70%",
            // marginLeft:"32.5%",
            marginLeft: "15%",
            marginTop: "0",
            marginRight: 300,
            borderRadius: 30,
          }}
        ></div>
      </header>
      <div class="container1">
        {state.posts.map((post, i) => {
          return (
            <>
              <MDBCard className="car">
                <MDBCardImage src={post.post_image} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{post.title}</MDBCardTitle>
                  {/* <MDBCardText className="mb-0">
                    {oneAd.rentPrice + " JOD"}
                  </MDBCardText> */}
                  <MDBBtn
                    onClick={() => {
                      toOrder(post.id, post.user_id);
                    }}
                  >
                    order now
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Home;
