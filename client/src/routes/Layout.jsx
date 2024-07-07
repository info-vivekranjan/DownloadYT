import React from "react";
import Home from "../pages/Home";
import Help from "../pages/Help";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import './Layout.scss'

const Layout = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} exact/>
          <Route path="/home"  element={<Home/>} exact/>
          <Route path="/help" element={<Help/>} exact/>
        </Routes>
        <div className="Footy">
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default Layout;