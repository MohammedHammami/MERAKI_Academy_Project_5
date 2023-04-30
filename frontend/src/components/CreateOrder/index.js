import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import axios from "axios";
import Form from "react-bootstrap/Form";
import { createBrowserHistory } from "history";
import { useLocation, useNavigate } from "react-router-dom";
import { setPooster } from "../Redux/reducers/auth";
import "./style.css";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTextArea,
  MDBFile,
} from "mdb-react-ui-kit";
import Comments from "../Comments/Comments";
const CreateOrder = () => {
  const [timer,setTimer]=useState(false)
  setTimeout(() => {
    setTimer(true)
    }, 1000);
  const location = useLocation();
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const state = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const [schedule_date, setSchedule_date] = useState("");
  const [order_desc, setOrder_desc] = useState("");
  const [postInfo, setPostInfo] = useState({});
  const [userId,setUserId] = useState("")
  const sendSmsNotifaction = () => {
    axios
      .post("http://localhost:5000/orders/sms", {
        schedule_date,

      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

  };
  const getPostById = () => {
    // console.log(location);
    axios
      .get(`http://localhost:5000/posts/post/${location.state.id}`)
      .then((result) => {
        setUserId(result.data.posts[0].user_id);
        setPostInfo(result.data.posts[0]);
        dispatch(setPooster(result.data.posts[0].user_id))
      })
      .catch((err) => {
        console.log("err");
      });
  };
  useEffect(() => {
    getPostById();
  }, []);
  const submitFn = () => {
    axios
      .post(
        `http://localhost:5000/orders`,
        { schedule_date, order_desc, receiver_user_id: postInfo.user_id },
        {
          headers: {
            Authorization: state.token,
          },
        }
      )
      .then((result) => {
        // console.log(result.data.order[0]);
        createNotivication(
          result.data.order[0].id,
          result.data.order[0].order_desc,
          result.data.order[0].schedule_date
        );
        sendSmsNotifaction();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createNotivication = (order_id, order_desc, order_schedule) => {
    let newTime = order_schedule.split("T").splice(0, 1);
    axios
      .post(`http://localhost:5000/notifications/${order_id}`, {
        description: `description:${order_desc} time:${newTime}`,
        status: "create_order",
        receiver_user_id: location.state.user_id,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="containe-create-order">
      <div className="inpust-post">
        <div className="container-div">
          <div className="user-card">
            <img className="image" src={postInfo.post_image} />
            <div>
              <h2>{postInfo.title}</h2>
              <p>{postInfo.description}</p>
            </div>
          </div>
        </div>

        <div  className="inputCreteOrder">

        <MDBContainer className="p-2 my-2 flex-column w-40" >
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <label className="labelCreatOrder">Schedule a date with the service provider </label>
              
              <MDBInput
                type="date"
                placeholder="Enter Title"
                onChange={(e) => {
                  setSchedule_date(e.target.value);
                  }}                 
              />
            </Form.Group>
            <br></br>
            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
              <label className="labelCreatOrder">Your Order Description</label>
              <Form.Control
              className="mb-1"
                as="textarea"
                rows={3}
                placeholder="Enter description"
                onChange={(e) => {
                  setOrder_desc(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
          </MDBContainer>
          <MDBBtn
            size="lg"
            className="btnSubmitOrder"
            wrapperclass="mb-4 mt-4"
            onClick={(e) => {
              submitFn();
              navigate('/Dashboard/provider')
            }}
          >
            Submit Order
          </MDBBtn>
        </div>
      </div>
      <div>
        {timer&&<Comments value={userId}/>}
      </div>
    </div>
  );
};
export default CreateOrder;

