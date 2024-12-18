import React from "react";
import { motion } from "framer-motion";
import logo from "../public/logo2.png"; // Path to your logo image

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="header"
    >
      <div className="logo-container">
        {/* <img src={logo} alt="Modern CPA Logo" className="logo" /> */}
        <h1 className="company-name">Modern CPA Group</h1>
      </div>
      <nav className="nav-links">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#services" className="nav-link">
          What We Do
        </a>
        <a href="#taxes" className="nav-link">
          Taxes
        </a>
        <a href="#contact" className="nav-link">
          Let’s Connect
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
