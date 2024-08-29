import React, { useState } from 'react';
import logo from './marcos-quay-logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="Marcos Quay Logo" />
      </div>

      <div className={`navbar-content ${isOpen ? 'open' : ''}`}>
        <div className="list-items">
          <ul className="navbar-list">
            <li className="list-item"> <a href="/home">Home</a> </li>
            <li className="list-item"><a href="/aboutUs">About Us</a> </li>
            <li className="list-item"><a href="/ourOfferings">Out Offerings</a></li>
            <li className="list-item"><a href="/gallery">Gallery</a></li>
            <li className="list-item"><a href="/career">Career</a></li>
            <li className="list-item"><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <input type="button" className='enrolNowButton' value="ENROLL NOW" />
      </div>

      <button className="hamburger" onClick={toggleDrawer}>
        {isOpen ? '✖' : '☰'}
      </button>
    </div>
  );
};

export default Navbar;
