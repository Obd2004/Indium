import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './main.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "./Pages/Services/Services";
import Careers from "./Pages/Careers/Careers";
import Positsion from "./Pages/Positsion/Positsion";
function App() {
  AOS.init()
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/opencareers" element={<Positsion/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
