import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="header_cont">
      <Link to="/" className="logo_cont animate__animated animate__fadeIn">
        <h1>DownloadYT</h1>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <div className="nav_control animate__animated animate__fadeIn">
        <Link className="nav_link" to="/home">Home</Link>
        <Link className="nav_link" to="/help">Help</Link>
      </div>
    </div>
  );
};

export default Navbar;
