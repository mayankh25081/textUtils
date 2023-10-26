// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import About from "./componants/About";
import Navbar from './componants/Navbar'
import TextForm from './componants/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  // for dark mode of navbar
  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <Router>
      <Navbar  title1="TextUtils" title2 = "Home" title3 = "About" mode = {mode} toggleMode = {toggleMode}/>
      
      <Routes>
          <Route path="/textUtils/about" element={<About mode = {mode}/>} />
          <Route path="/textUtils" element={<TextForm heading = "Enter Your Text below to analyze" mode = {mode}/>} />
      </Routes>
    </Router>
  );
}

export default App;
