import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { changeMood } from "../Redux/reducers/mood";
const Navbar = () => {
  const [moodstate, setMoodstate] = useState(false);
  const dispath = useDispatch();
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      mood: state.Mood.mood,
    };
  });

  const mood=state.mood
  let newTheme= moodstate? 'lightMood':'darkMood'

  const mood = state.mood;
  let newTheme = moodstate ? "lightMood" : "darkMood";
  console.log(mood);

  return (
    <>
      {state.isLoggedIn ? (
        <>
          <div className="navbar">
          <Form.Check onChange={(e)=>{
        console.log('value:', e.target.value);
        setMoodstate(!moodstate)
        dispath(changeMood(newTheme))
      }}
        type="switch"
        id="custom-switch"
        label=" switch Mood"
      />
            <Link to="/CreateCraft"> Craft </Link>
            <Link to="/Comment"> Comment </Link>
            <Link to="/user">my posts</Link>
            <Link to="/CreatePost"> post </Link>
            <Link to="/Dashboard/provider"> Dashboard </Link>
            <Link></Link>
          </div>
        </>
      ) : (
        <>
          <div className="navbar">
            <Link to="/Register"> Register </Link>
            <Link to="/login"> login </Link>
            <Link to="/CreateCraft"> Craft </Link>
            <Link to="/Comment"> Comment </Link>

            
            
            <Link ></Link>

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

            <Link></Link>

          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
