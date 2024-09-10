  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import logo from './marcos-quay-logo.png';
  import './Navbar.css';

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate hook

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
              <li className="list-item" onClick={() => navigate('/home')}>Home</li>
              <li className="list-item" onClick={() => navigate('/aboutUs')}>About Us</li>
              <li className="list-item">
                Our Offerings
                <div className="dropdown-content">
                  <div onClick={() => navigate('/ourOfferings/in-school-program')}>In School Program</div>
                  <div onClick={() => navigate('/ourOfferings/sports-academy')}>Sports Academy</div>
                  <div onClick={() => navigate('/ourOfferings/ace')}>Ace</div>
                  <div onClick={() => navigate('/ourOfferings/brand-sponsorship')}>Brand and Sponsorship</div>
                </div>
              </li>
              <li className="list-item" onClick={() => navigate('/gallery')}>Gallery</li>
              <li className="list-item" onClick={() => navigate('/career')}>Career</li>
              <li className="list-item" onClick={() => navigate('/contact')}>Contact</li>
            </ul>
          </div>

          <input type="button" className="enrolNowButton" value="ENROLL NOW" onClick={handleEnrollClick} />
        </div>

        <button className="hamburger" onClick={toggleDrawer}>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
    );
  };

  export default Navbar;
