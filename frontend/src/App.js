import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register";
import Login from "./components/Login/Login";
import CreatePost from "./components/CreatePost";
import CreateCrafte from "./components/CreateCrafts";
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> </h1>
      </header>
      <Navbar/>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/posts" element={<CreatePost/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
