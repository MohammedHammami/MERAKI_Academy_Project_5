import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CreatePost = () => {
  const fileInputRef = useRef();
  const uploadImage = async (i) => {
    console.log(i);
    const data = new FormData();
    data.append("file", i);
    data.append("upload_preset", "n9udcnak");
    data.append("cloud_name", "dh2mazipf");
    await fetch("https://api.cloudinary.com/v1_1/dh2mazipf/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.url);
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const state = useSelector((state) => {
    return {
      token: state.auth.token,
      mood: state.Mood.mood,
    };
  });
  const mood = state.mood;

  const [url, setUrl] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pricing, setPricing] = useState("");
  const [image, setImage] = useState(" ");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const errorNotify = () => {
    toast.error("please enter all required fildes");
  };

  const submitFn = () => {
    axios
      .post(
        `http://localhost:5000/posts`,
        { title, description, pricing, post_image: url },
        {
          headers: {
            Authorization: state.token,
          },
        }
      )
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  return (
    <div className="inpust-post">
      <MDBContainer fluid>
        <MDBCard
          
          style={{ borderRadius: "25px"}}
        >
          <MDBCardBody className="bodyOfCreatOrder">
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-3 order-lg-1 d-flex flex-column align-items-center"
              >
                <div className="d-flex  align-items-center mb-4 ">
                  <MDBIcon fas icon="fas fa-heading me-4" size="lg"
                  />
                  <MDBInput
                    label="Title"
                    id="form1"
                    type="text"
                    className="w-100"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas 
                  icon="fas fa-highlighter me-3"
                   size="lg"
                   />
                  <MDBInput
                  className="w-100"
                    label="Description"
                    id="form1"
                    type="text"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon
                    fas
                    icon=" fas fa-money-bill-1-wave me-3"
                    size="lg"
                  />
                  <MDBInput
                    label="Pricing"
                    id="form1"
                    type="text"
                    onChange={(e) => {
                      setPricing(e.target.value);
                    }}
                  />
                </div>
                {image ? (
                  <img src={url} className="img" />
                ) : (
                 <div className="d-flex flex-row align-items-center mb-4"
                  onDragOver={(e) => {
                    e.preventDefault();
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    setImage(e.dataTransfer.files[0]);
                    uploadImage(e.dataTransfer.files[0]);
                  }}
                >
                  <MDBIcon fas icon="camera-retro me-3" size="lg" 
                  />
                  <button className="imgbtn" onClick={(e) => { fileInputRef.current.click()}}>
                    take image from your device
                    <br></br>
                    <MDBIcon fas size="lg" icon="plus-circle me-3" />
                  </button>
                  <MDBInput
                    label=""
                    id="form4"
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                      uploadImage(e.target.files[0]);
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      setImage(e.dataTransfer.files[0]);
                      uploadImage(e.dataTransfer.files[0]);
                    }}
                  >
                    <MDBIcon
                      fas
                      icon="camera-retro me-3"
                      size="lg"
                      className={mood === "darkMood" ? "darkMood" : "lightMood"}
                    />
                    <button
                      className="imgbtn"
                      onClick={(e) => {
                        fileInputRef.current.click();
                      }}
                    >
                      take image from your device
                      <br></br>
                      <MDBIcon fas size="lg" icon="plus-circle me-3" />
                    </button>
                    <MDBInput
                      label=""
                      id="form4"
                      type="file"
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                        uploadImage(e.target.files[0]);
                      }}
                    />
                  </div>
                )}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBBtn className="mb-4" size="lg" style={{color:'#223d66' ,backgroundColor:'whitesmoke'}} onClick={()=>{setImage(null)}}>undo</MDBBtn>
                {" "}
                <MDBBtn className="mb-4"size="lg"
                style={{color:'#223d66' ,backgroundColor:'whitesmoke',marginLeft:'5px'}}  onClick={()=>{submitFn()
                      navigate('/')}}>
                  Submit
                </MDBBtn></div>
                <div>
                  <MDBBtn
                    className={
                      mood === "darkMood" ? "darkMood mb-4" : "lightMood mb-4"
                    }
                    size="lg"
                    onClick={() => {
                      setImage(null);
                    }}
                  >
                    undo
                  </MDBBtn>
                  <MDBBtn
                    className={
                      mood === "darkMood" ? "darkMood mb-4" : "lightMood mb-4"
                    }
                    size="lg"
                    onClick={(e) => {
                      const value = title;
                      const desValue = description;
                      const price = pricing;
                      const img = image
                      if (!value.trim() || !desValue.trim() || !price.trim()) {
                        errorNotify();
                      } else {
                        handleShow();
                      }
                    }}
                  >
                    Submit
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to post</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={(e) => {
              handleClose();
              submitFn();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
      </MDBContainer>
    </div>
  );
};
export default CreatePost;
