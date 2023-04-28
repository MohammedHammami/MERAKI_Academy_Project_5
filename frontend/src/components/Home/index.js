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
              "url('https://img.freepik.com/premium-vector/plumbing-service-with-plumber-workers-repair-maintenance-fix-home-cleaning-bathroom-equipment-flat-background-illustration_2175-2497.jpg?w=2000')",
            height: "50vh",
            width: "50%",
            marginLeft: "25%",
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
                  <MDBBtn href="#">view</MDBBtn>
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
