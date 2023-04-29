import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import { ToastContainer, toast } from 'react-toastify';
import {MDBInput} from "mdb-react-ui-kit";
import { setNotification } from "../Redux/reducers/noti";
const GetAllNotification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [smShow, setSmShow] = useState(false);
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0)
  const state = useSelector((state) => {
    console.log(state.noti.notification);
    return {
      token: state.auth.token,
      userInfo: state.auth.userInfo,
      userId:state.auth.userId,
      notifications:state.noti.notification
    };
  });
  const [notifications, setNotifications] = useState(state.notifications);

    const getNotifications = ()=>{
        axios
        .get(`http://localhost:5000/notifications`,{headers: {
            Authorization: state.token
            }})
        .then((result)=>{
            setNotifications(result.data.notification)
            dispatch(setNotification(result.data.notification))
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    const createNotivication = (order_id,description,status)=>{
        axios
        .get(`http://localhost:5000/orders/order_id/${order_id}`)
        .then((result)=>{
            console.log(result);
            axios
            .post(`http://localhost:5000/notifications/${order_id}`,{description:description,status:status,receiver_user_id:result.data.order[0].requester_user_id})
            .then((result)=>{console.log(result);})
            .catch((err)=>{console.log(err);})

        })
        .catch((err)=>{console.log(err);}) 
        }
    const updateNotificationFn = (id,status) => {
        axios
        .put(`http://localhost:5000/notifications/${id}`,{status:status})
        .then((result)=>{console.log(result);})
        .catch((err)=>{console.log(err);})
    }
    const updateOrderState = (order_id,state_id) => {
        axios
        .put(`http://localhost:5000/orders/state/${order_id}`,{state_id},{headers: {
            Authorization: state.token
        }})
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const RateFn = (rate,receiver_user_id,order_id,idNoti)=>{
        axios
        .get(`http://localhost:5000/orders/order_id/${order_id}`)
        .then((result)=>{
            console.log(result);
            axios
            .post(`http://localhost:5000/review`,{rate,receiver_user_id:result.data.order[0].receiver_user_id,order_id},{headers: {
            Authorization: state.token
            }})
            .then((result)=>{
                updateNotificationFn(idNoti,"order_end")
                setTimeout(() => {
                    navigate("/Dashboard/provider")
                  }, 1000); 
            })
            .catch((err)=>{console.log(err);})

        })
        .catch((err)=>{console.log(err);})
    }
    const CreateComment = (receiver_user_id) => {
        axios
          .post(
            `http://localhost:5000/comments/${receiver_user_id}`,
            { description: description },
            {
              headers: {
                authorization: `Bearer ${state.token}`,
              },
            }
          )
          .then((result) => {
            console.log(result.data.result);
            handleClick()
          })
          .catch((err) => {
            console.log(err);
          });
      };    
      const handleClick = () => {
        toast.success('Commented Successfully', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: true, 
        });
      };
      useEffect(()=>{
        getNotifications()
        console.log(notifications);
    },[])
    return (    
    <div>
        {/* <h1 style={{textAlign:"center",marginTop:"50px",fontSize:"36px"}}>New order cumming to you</h1> */}
        <div className="logos">
            {
            state.notifications.map((noti,i)=>{
            if(noti.status==="create_order"){
                const value = noti.description.split(':')
                const description = value[1].split('time')[0]
                const time = value[2]
            return(
                <div className="logo" key={i}>
                    <p>Hello Mr : {state.userInfo.first_name}</p>
                    <p>Someone has created a new request for one of your posts</p>
                    <p>requester said : {description}</p>
                    <p>in time : {time}</p>
                    <p>Please accept or canceld</p>
                    <Button onClick={()=>{
                        const info = state.userInfo
                    createNotivication(noti.order_id,info.first_name+" "+info.last_name+" "+info.Phone_Number,"accept_order");
                    updateNotificationFn(noti.id,"accepted_order_done")
                    updateOrderState(noti.order_id,2)}} className="button_noti">Accept
                    </Button>
                    <Button onClick={()=>{
                    createNotivication(noti.order_id,"your order canceld from provider","canceld_order");
                    updateNotificationFn(noti.id,"order_canceld_done")
                    updateOrderState(noti.order_id,3)}} className="button_noti">Cancel
                    </Button>
                </div>
            )
            }
            })
            }
            
        </div>

        <div className="logos">
            {/* <h1 style={{textAlign:"center",marginTop:"50px",fontSize:"36px"}}>Provider aceppt your order</h1> */}
            {
            notifications.map((noti,i)=>{
                if(noti.status==="accept_order"){
                const value = noti.description.split(' ')
                return(
                <div className="logo" key={i}>
                    <p>Hello Mr : {state.userInfo.first_name}</p>
                    <p>We hope you are well</p>
                    <p>provider {value[0]} accepted your request</p>
                    <p>You can now contact him through the phone number: {value[2]}</p>
                    <p>Please rate {value[0]} after dealing with him</p>
                    <Button onClick={() => {setSmShow(true); setRate(0)}} className="me-2 button_noti" >Rate</Button>
                    <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm"> Rate order </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {rate===0?
                        <div className="rating">
                            <p>please rate provider</p>
                            <span className="star" data-rating="5" onClick={()=>{setRate(5)}}></span>
                            <span className="star" data-rating="4" onClick={()=>{setRate(4)}}></span>
                            <span className="star" data-rating="3" onClick={()=>{setRate(3)}}></span>
                            <span className="star" data-rating="2" onClick={()=>{setRate(2)}}></span>
                            <span className="star" data-rating="1" onClick={()=>{setRate(1)}}></span>
                        </div>:
                        <div>
                            <p>you rate provider {rate} from 5</p>
                            <button onClick={()=>{setRate(0)}} className={'button_noti'}>back to rate</button><ToastContainer/>
                            <p>Please share your experience with the service Provider</p>
                         <div className="createComment">
                            
                         <MDBInput
                           wrapperClass="mb"
                           label="+ Add youer comment"
                           onChange={(e) => {
                             setDescription(e.target.value);
                           }}
                         />
                         <Button
                           size="sm"
                           onClick={() => {
                             CreateComment(state.userId);
                             RateFn(rate,noti.receiver_user_id,noti.order_id,noti.id)
                           }}
                         >
                           <IosShareOutlinedIcon />{" "}
                         </Button>
                       </div>
                       </div>
                        }
                    </Modal.Body>
                    </Modal>
                </div>
            )
            }
            })
            }
            
        </div>

        <div className="logos">
            {/* <h1 style={{textAlign:"center",marginTop:"50px",fontSize:"36px"}}>Provider aceppt your order</h1> */}
            {
            notifications.map((noti,i)=>{
            if(noti.status==="canceld_order"){
            return(
                <div className="logo" key={i}>
                    <p>{noti.description}</p>
                    <p>{noti.description}</p>
                        <p>the provider canceld order</p>
                        <Button onClick={()=>{updateNotificationFn(noti.id,"finale_order-canceld");navigate("/Dashboard/provider")}} className="button_noti">Cancel</Button>
                </div>
            )
            }
            })
            }
            
        </div>
    </div>
  );
};

export default GetAllNotification;
