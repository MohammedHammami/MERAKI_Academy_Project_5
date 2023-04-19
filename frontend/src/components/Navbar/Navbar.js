import React from "react";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const state = useSelector((state) => {
    console.log(state);
    return {
      isLoggedIn: state.auth.isLoggedIn,
    };
  });
  console.log(state.isLoggedIn);

  return (
    <>
      {state.isLoggedIn ? (
        <>
          <div className="navbar">
            <Link to="/Register"> Register </Link>
            <Link to="/login"> login </Link>
            <Link to="/CreateCraft"> Craft </Link>
            <Link to="/Comment"> Comment </Link>
            <Link ></Link>
          </div>
        </>
      ) : (
        <>
        
        </>
      )}
    </>
  );
};

export default Navbar;
