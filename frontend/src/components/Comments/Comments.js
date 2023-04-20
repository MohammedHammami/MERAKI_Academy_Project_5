import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Comments = () => {
  const [comments, setComments] = useState("");
  const token = useSelector((state) => state.auth.token);
  const getComment = () => {
    
    axios
      .get(`http://localhost:5000/comments/1`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data);
        setComments(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(token);
    getComment();
  }, []);

  return (
    <div>
      <h1>COMMENT</h1>
      
    </div>
  );
};

export default Comments;
