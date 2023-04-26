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
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Navbar.css'
import { Button } from "react-bootstrap";
import { setLogout } from "../Redux/reducers/auth";
const Navbars = () => {
  
  
    
  const [moodstate, setMoodstate] = useState(false);
  const dispath = useDispatch();

  const logout=()=>{
    dispath(setLogout())
  }
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      mood: state.Mood.mood,
    };
  });
  const mood = state.mood;
  let newTheme = moodstate ? "lightMood" : "darkMood";
  console.log(mood);

  return (
    <>
      {state.isLoggedIn ? (
        <>
          <div className={
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          }>
                             <div class="dropdown">
  <button className={
                            mood === "darkMood"
                              ? "darkMood dropbtn"
                              : "lightMood dropbtn"
                          }><Navbar.Toggle aria-controls="basic-navbar-nav" /></button>
  <div className={
                            mood === "darkMood"
                              ? "darkMood dropdown-content"
                              : "lightMood dropdown-content"
                          }>
    <a href="/Dashboard">Dashboard</a>
    <a href="/CreatePost">post</a>
    <a href="/user">my posts</a>
    <a href="#" onClick={logout}>logout</a>
  </div>
  </div>
           
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3 search'>
          <input className='form-control' placeholder="Search .." aria-label="Search" type='Search' />
          <Button className={
                            mood === "darkMood"
                              ? "darkMood btnsearch"
                              : "lightMood  btnsearch"
                          }><SearchOutlinedIcon  className="btnsearch"/></Button>
        </MDBInputGroup>

            <div>
  <input type="checkbox" class="checkbox" id="checkbox" onChange={() => {
                setMoodstate(!moodstate);
                dispath(changeMood(newTheme));
              }}/>
  <label for="checkbox" class="checkbox-label">
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun"></i>
    <span class="ball"></span>
  </label>
</div>   
              <Navbar.Brand  className={
                                  mood === "darkMood"
                                    ? "darkMood navbar"
                                    : "lightMood navbar"
                                } href="/" >Home</Navbar.Brand>
          </div>
          
        </>
      ) : (
        <>
         
            <div  className={
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          }>
     
        <Navbar.Brand className={
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          } href="/">Home</Navbar.Brand>
        
        
          
          <Link className= {
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          } to="/login"> login</Link>
            <Link  className={
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          } to="/Register"> Register </Link>
                          <Nav className={
                            mood === "darkMood"
                              ? "darkMood "
                              : "lightMood "
                          }>
            <NavDropdown title="seting" className={
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          }id="basic-nav-dropdown">
              <NavDropdown.Item className={
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          } href="/Dashboard/provider">Dashboard</NavDropdown.Item>
              <NavDropdown.Item className={
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          } href="/CreateCraft">
              CreateCraft
              </NavDropdown.Item>
              <NavDropdown.Item href="Comment" className={
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          }>Comment</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout" className={
                            mood === "darkMood"
                              ? "darkMood navbar"
                              : "lightMood navbar"
                          }>
              logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
       
            
      
    </div>
    
         
        </>
      )}
    </>
  );
};

export default Navbars;
