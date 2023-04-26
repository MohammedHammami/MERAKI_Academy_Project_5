import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { changeMood } from "../Redux/reducers/mood";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { red } from "@mui/material/colors";
import './Navbar.css'
const Navbars = () => {
  const [moodstate, setMoodstate] = useState(false);
  const dispath = useDispatch();
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      mood: state.Mood.mood,
    };
  });
  const mood = state.mood;
  let newTheme = moodstate ? "lightMood" : "darkMood";
  console.log(state.isLoggedIn);

  return (
    <>
      {!state.isLoggedIn ? (
        <>
          <div className="navbar mood">
            <Navbar.Brand href="/" style={{color:'red'}}>Home</Navbar.Brand>
          <Form.Check onChange={(e)=>{
        console.log('value:', e.target.value);
        setMoodstate(!moodstate)
        dispath(changeMood(newTheme))
      }}
        type="switch"
        id="custom-switch"
        label="switch Mood"
      />
      
      
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Search .." aria-label="Search" type='Search' />
          <MDBBtn>Search</MDBBtn>
        </MDBInputGroup>
     
  
            <Link to="/user">my posts</Link>
            <Link to="/CreatePost"> post </Link>
            <Link to="/Dashboard/provider"> Dashboard </Link>
          
          </div>
        </>
      ) : (
        <>
          <div className={
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          }>
            <Navbar bg="light" expand="lg" className={
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          }>
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Register">Register</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Dashboard/provider">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="/CreateCraft">
              CreateCraft
              </NavDropdown.Item>
              <NavDropdown.Item href="Comment">Comment</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">
              logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
            <Form.Check
              onChange={(e) => {
                console.log("value:", e.target.value);
                setMoodstate(!moodstate);
                dispath(changeMood(newTheme));
              }}
              type="switch"
              id="custom-switch"
              label=" switch Mood"
            />
      </Container>
    </Navbar>
          </div>
        </>
      )}
    </>
  );
};

export default Navbars;
