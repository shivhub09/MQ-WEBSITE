import React from 'react';
import HomeImage from './components/images/Website Home2.jpg';
import HomePage1 from './components/images/About-Us-1.png';
import HomePage2 from './components/images/About-Us-2.png';
import HomePage3 from './components/images/About-Us-3.png';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <div className="homePage-container">
          <img src={HomeImage} alt="Home" />
      </div>

      <div className="what-we-do-container">
        <h1 className="what-we-do-container-title">What We Do</h1>
        <div className="what-we-do-container-content-box">
          <div className="what-we-do-container-content">
            <p>
              Welcome to Marcos Quay, where we empower the next generation through comprehensive sports education. Partnering with schools, we deliver expert-led programs that enhance physical skills, teamwork, and sportsmanship. Join us in fostering a healthier, more active future for our kids.
            </p>

            <ul className="content-list-items">
              <li><img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="Icon" /> Less routine - more creativity</li>
              <li><img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="Icon" /> Hundreds of thousands saved</li>
              <li><img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="Icon" /> Scale Budget efficiently</li>
            </ul>

            <input type="button" className='getInTouchBtn' value="Get In Touch   >" />
          </div>
          <div className="what-we-do-container-images">
    
            <img src={HomePage1} alt="Description of Image" />
            <img src={HomePage2} alt="Description of Image" />
            <img src={HomePage3} alt="Description of Image" />
          </div>
        </div>
      </div>






    </div>
  );
}

export default HomePage;
