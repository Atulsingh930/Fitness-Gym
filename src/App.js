import './App.css';
import GymCard from './Component/GymCard';
import NavBar from './Component/Navbar'
import Home from './Component/Home';
import {Routes , Route } from "react-router-dom";
import DetailCard from './Component/DetailCard';
import { useState } from 'react';
function App() {
  const apiKey = process.env.REACT_APP_API_KEY
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path = "Search/:query" element = {<GymCard apiKey ={apiKey}/>}/>
      <Route path = "Exercise/:id" element = {<DetailCard/>}/>
    </Routes>
    </>
  );
}

export default App;
