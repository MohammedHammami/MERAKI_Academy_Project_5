import React from "react";
import axios from "axios";
import "./index.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPost } from "../Redux/reducers/posts";

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
              "url('https://cdn.pixabay.com/photo/2016/01/20/10/52/maintenance-1151312_960_720.png')",
            height: 350,
            width: 900,
            marginLeft: 300,
            marginRight: 300,
            borderRadius: 30,
          }}
        ></div>
      </header>
      <div className="cards">
        {state.posts.map((post, i) => {
          return (
            <Card
              className="post"
              style={{ width: "200", height: "150" }}
              key={i}
            >
              <Card.Img
                variant="top"
                src="https://www.shutterstock.com/image-photo/roofer-carpenter-working-on-roof-260nw-748292161.jpg"
              />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Button
                  variant="primary"
                  onClick={() => {
                    toOrder(post.id, post.user_id);
                  }}
                >
                  order now
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default Home;
