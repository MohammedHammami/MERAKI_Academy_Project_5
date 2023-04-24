import axios from "axios";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPost, deletePost, updatePost } from "../Redux/reducers/posts";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const UserPost = () => {
  const state = useSelector((state) => {
    return {
      token: state.auth.token,
      posts: state.post.posts,
      userId: state.auth.userId,
    };
  });

  const dispatch = useDispatch();

  const getUserPosts = () => {
    axios
      .get(`http://localhost:5000/posts/${state.userId}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
        dispatch(setPost(res.data.posts));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteSelectedPost = (id) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          dispatch(deletePost(id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateSelectedPost = (id) => {
    axios
      .put(`http://localhost:5000/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          dispatch(updatePost(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
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
                onClick={(e) => {
                  deleteSelectedPost(post.id);
                }}
              >
                delete post
              </Button>
              <br />
              <Button
                onClick={(e) => {
                    updateSelectedPost(post.id);
                }}
              >
                update post
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default UserPost;
