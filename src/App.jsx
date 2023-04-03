import React from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './main.scss'
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
