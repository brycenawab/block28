import { useState } from 'react'
import Blue from "./components/blue"
import Red from "./components/red"
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home"
function App() {


  return (
<div id="container">
      <div id="navbar">
        <Link to="blue">blue</Link>
        <Link to="red">red</Link> 
        <Link to="/Home">home</Link>
        </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<h1><Blue /></h1>} />
          <Route path="/red" element={<h1><Red /></h1>} />
          <Route path="/Home" element={<h1><Home /></h1>}/>
        </Routes >
      </div>
  </div>
  )
}

export default App
