import "./Navbar.css"
import { BsFillHouseFill,BsPersonCheckFill } from 'react-icons/bs';
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../Redux/reducers/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { BsFillHouseFill } from "react-icons/bs";


const Navbars = () => {
  const [imageP,setImageP] = useState("")
  const [craft,setCraft] = useState("")
  const [moodstate, setMoodstate] = useState(false);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const logout = () => {
    dispath(setLogout());
  };
  const state = useSelector((state) => {
    console.log(state);
    return {
      isLoggedIn: state.auth.isLoggedIn,
      token: state.auth.token,
      user_image: state.auth.user_image,
    };
  });
  
  let newTheme = moodstate ? "lightMood" : "darkMood";
  const getCraft = ()=>{
    axios
      .get(`http://localhost:5000/users/`,{headers:{Authorization: state.token}})
      .then((result)=>{
        setCraft(result.data.user[0].craft_id);
      })
      .catch((err)=>{
          console.log(err);
      })
  }
  useEffect(()=>{
    
  setImageP(state.user_image)
    getCraft()
    
  },[])
  return (
    <div className="navBar-container">
      <Navbar collapseOnSelect expand="lg"  className="background-navbar">
      <Navbar.Brand style={{marginLeft:"5%"}} >
        <h3 className="header-logo" style={{
          display:'flex',
          fontFamily: "Roboto",
          letterSpacing:"0.8px",
          fontWeight:"999",
          lineHeight: "1",fontSize:"35px"
          }}>TasLee7<span>.</span></h3> </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "flex-end" }}  >
          
          <Nav>
            {state.isLoggedIn?
            <>
            
             <Nav.Link style={{ fontSize: '18px',marginLeft:"-30%"}} onClick={()=>{navigate(`/`)}}className="each-navbar">Home </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' }} className="each-navbar">Support </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' }} className="each-navbar">About us </Nav.Link>
            <NavDropdown id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={()=>{
                navigate("/Dashboard/provider")
              }}>Dashboard</NavDropdown.Item>
              {craft?
                <NavDropdown.Item onClick={()=>{navigate("/CreatePost")}}>Create Announcement</NavDropdown.Item>
                :
                <NavDropdown.Item onClick={()=>{navigate("/CreateCraft")}}>Join us</NavDropdown.Item>
              }
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
            <img
              src={imageP}
              alt="Profile Pic"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '20px', }}
            />
            </>
            :<>
             <Nav.Link style={{ fontSize: '18px',marginLeft:"-30%"}} onClick={()=>{navigate(`/`)}}className="each-navbar">Home </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' }} onClick={()=>{navigate(`/register`)}}className="each-navbar">Register </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' }} onClick={()=>{navigate(`/login`)}}className="each-navbar">Login </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' }} className="each-navbar">Support </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' }} className="each-navbar">About us </Nav.Link>
            </>
            }
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  //   <>
  //     <header id="header" className="d-flex align-items-center">
  //   <div className="container d-flex align-items-center justify-content-between">
  //     <h1 className="logo"><a href="index.html">BizLand<span>.</span></a></h1>
  //     <nav id="navbar" className="navbar">
  //       <ul>
  //         <li><a className="nav-link scrollto active" >Home</a></li>
  //         <li><a className="nav-link scrollto" >About</a></li>
  //         <li><a className="nav-link scrollto" >Services</a></li>
  //         <li><a className="nav-link scrollto " >Portfolio</a></li>
  //         <li><a className="nav-link scrollto" >Team</a></li>
  //         <li className="dropdown"><a><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
  //           <ul>
  //             <li><a>Drop Down 1</a></li>                
  //             <li><a>Drop Down 2</a></li>
  //             <li><a>Drop Down 3</a></li>
  //             <li><a>Drop Down 4</a></li>
  //           </ul>
  //         </li>
  //         <li><a className="nav-link scrollto">Contact</a></li>
  //       </ul>
  //     </nav>
  //   </div>
  // </header>
  //   </>
    
  );
};

export default Navbars;
