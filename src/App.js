import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from "./Component/Contact";
import Destinations from "./Component/Destinations";
import List from "./Component/List";
import Footer from "./Component/Footer";


const App = () => {
  return(
    <>
    <List/>
    <Routes>
      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/about" element = {<About/>}/>
      <Route exact path="/destinations" element = {<Destinations/>}/>
      <Route exact path="/contact" element = {<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;