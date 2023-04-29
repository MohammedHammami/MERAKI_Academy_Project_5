import "./Navbar.css"
import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector, useDispatch } from "react-redux";
import { setLogout, setNotification } from "../Redux/reducers/auth";
import { setCounterNotification } from "../Redux/reducers/noti";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { BsFillHouseGearFill,BsFillBarChartFill,BsChatDotsFill,BsFillPlusSquareFill,BsFillPlusCircleFill,BsBoxArrowInLeft} from 'react-icons/bs';
const Navbars = () => {
    const [moodstate, setMoodstate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
      setIsLoading(true);
      setNotificationsCount(0)
      dispatch(setLogout())
    };
    const state = useSelector((state) => {
      // console.log(state.noti);
      return {
        isLoggedIn: state.auth.isLoggedIn,
        token: state.auth.token,
        user_image: state.auth.user_image,
        craft: state.auth.userInfo.craft_id,
        counterNotification:state.noti.counterNotification
      };
    });
    const [notificationsCount, setNotificationsCount] = useState(state.noNotification)
    
    let newTheme = moodstate ? "lightMood" : "darkMood";

  const getNotifications = ()=>{
      axios
      .get(`http://localhost:5000/notifications`,{headers: {
          Authorization: state.token
          }})
      .then((result)=>{
        // fillterNoti(result.data.notification)
        dispatch(setCounterNotification(result.data.notification))
      })
      .catch((err)=>{
          console.log(err);
      })
  }
  // const fillterNoti = (array) =>{
  //   let a = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if(array[i].status == 'create_order'||
  //     array[i].status =='accept_order'||
  //     array[i].status =='accepted_order'||
  //     array[i].status =='canceld_order'||
  //     array[i].status =='order_canceld'
  //     ){
  //       a++
  //     }
  //   }
  //   dispatch(setNotification(a))
    
  // }
  useEffect(()=>{
    
      getNotifications()
    
  },[])
  return (
    <>
     
    <div className="navBar-container">
      <Navbar collapseOnSelect expand="lg"  className="background-navbar">
      <Navbar.Brand style={{marginLeft:"5%"}} >
        <h3 className="header-logo" style={{
          display:'flex',
          fontFamily: "Roboto",
          letterSpacing:"0.8px",
          lineHeight: "1",fontSize:"40px"
          }} onClick={()=>{navigate('/')}}>Tas<h3 className ='the-L-letter'>L</h3>ee7<span className ="for-the-dot">.</span></h3> </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "flex-end",  }}  >
          
          <Nav>
            {state.isLoggedIn?
            <>
             <Nav.Link style={{ fontSize: '18px',marginLeft:"-30%" ,color:"white"}} onClick={()=>{navigate(`/`)}}className="each-navbar">Home </Nav.Link>
             
             <Nav.Link style={{ fontSize: '18px' ,color:"white"}} className="each-navbar" onClick={()=>{navigate("/support")}}>Support </Nav.Link>
             <Nav.Link style={{ fontSize: '18px',color:"white" }} onClick={()=>{navigate(`/aboutus`)}}className="each-navbar darkss" >About us </Nav.Link>
             <div style={{color:"white"}} onClick={()=>{navigate('/getAllNotification')}}>
              <FaBell size={22} color="gray" style={{color:"white",marginTop:"12px"}}/>
               <span style={{marginTop:"12px"}}>{state.counterNotification}</span>
            </div>
            <NavDropdown id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={()=>{
                navigate("/Dashboard/provider")
              }}><BsFillBarChartFill/> Dashboard</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{
                navigate("/update/profile")
              }}><BsFillHouseGearFill/> Account</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{
                navigate("/Chat")
              }}><BsChatDotsFill/> Chat AI</NavDropdown.Item>
              {state.craft?
                <NavDropdown.Item onClick={()=>{navigate("/CreatePost")}}><BsFillPlusSquareFill/> Post an Ad</NavDropdown.Item>
                :<NavDropdown.Item onClick={()=>{navigate("/CreateCraft")}}><BsFillPlusCircleFill/> Join us</NavDropdown.Item>
              }
              
              <NavDropdown.Item onClick={logout} ><BsBoxArrowInLeft /> Logout</NavDropdown.Item>
            </NavDropdown>
            
            <img
              src={state.user_image}
              alt="Profile Pic"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '20px', }}
            />
            
            
            </>
            :<>
             <Nav.Link style={{ fontSize: '18px',marginLeft:"-30%",color:"white"}} onClick={()=>{navigate(`/`)}}className="each-navbar">Home </Nav.Link>
             <Nav.Link style={{ fontSize: '18px',color:"white" }} onClick={()=>{navigate(`/register`)}}className="each-navbar">Register </Nav.Link>
             <Nav.Link style={{ fontSize: '18px',color:"white" }} onClick={()=>{navigate(`/login`)}}className="each-navbar">Login </Nav.Link>
             <Nav.Link style={{ fontSize: '18px' ,color:"white"}} className="each-navbar" onClick={()=>{navigate("/support")}}>Support </Nav.Link>
             <Nav.Link style={{ fontSize: '18px',color:"white" }} onClick={()=>{navigate(`/aboutus`)}}className="each-navbar about-us">About us </Nav.Link>
            </>
            }
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
    </>
  );
};

export default Navbars;
