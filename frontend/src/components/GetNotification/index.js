import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const GetAllNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const state = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const getNotifications = () => {
    axios
      .get(`http://localhost:5000/notifications`, {
        headers: {
          Authorization: state.token,
        },
      })
      .then((result) => {
        console.log(result.data.notification);
        setNotifications(result.data.notification);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getNotifications();
  }, []);
  return (
    <div className="all-notification-div">
      {notifications.map((noti, i) => {
        return (
          <Card key={i}>
            <Card.Body>
              <Card.Title>{noti.description}</Card.Title>
              <Button>Accept</Button>
              <Button>Cancel</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default GetAllNotification;
