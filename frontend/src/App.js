import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register";
import Login from "./components/Login/Login";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import CreateCraft from "./components/CreateCrafts";
import CreateOrder from "./components/CreateOrder";
import GetAllOrders from "./components/GetAllOrders";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> </h1>
      </header>
      <Navbar />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/posts" element={<CreatePost />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/CreateOrder" element={<CreateOrder />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/CreateCraft" element={<CreateCraft />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
