import "./App.css";
import { Route,Routes } from "react-router-dom";

import Register from './components/Register'
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project 5 </h1>
      </header>
      
      <Routes>

      <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
