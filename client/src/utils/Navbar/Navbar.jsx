import React, { useState } from 'react';
import logo from './marcos-quay-logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEnrollClick = () => {
    window.location.href = 'https://pay.marcosquay.com/form/index.php';
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="Marcos Quay Logo" />
      </div>

      <div className={`navbar-content ${isOpen ? 'open' : ''}`}>
        <div className="list-items">
          <ul className="navbar-list">
            <li className="list-item"><a href="/home">Home</a></li>
            <li className="list-item"><a href="/aboutUs">About Us</a></li>
            <li className="list-item">
  Our Offerings
  <div className="dropdown-content">
    <a href="/ourOfferings/in-school-program">In School Program</a>
    <a href="/ourOfferings/sports-academy">Sports Academy</a>
    <a href="/ourOfferings/ace">Ace</a>
    <a href="/ourOfferings/brand-sponsorship">Brand and Sponsorship</a>
  </div>
</li>

            <li className="list-item"><a href="/gallery">Gallery</a></li>
            <li className="list-item"><a href="/career">Career</a></li>
            <li className="list-item"><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <input type="button" className='enrolNowButton' value="ENROLL NOW" onClick={handleEnrollClick} />
      </div>

      <button className="hamburger" onClick={toggleDrawer}>
        {isOpen ? '✖' : '☰'}
      </button>
    </div>
  );
};

export default Navbar;
