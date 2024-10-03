import React from 'react';
import HomeImage from './components/images/Website Home2.jpg';
import HomeMobileImage from './components/images/Website Home Mobile View - Copy.jpg';
import HomePage1 from './components/images/About-Us-1.png';
import HomePage2 from './components/images/About-Us-2.png';
import HomePage3 from './components/images/About-Us-3.png';
import './HomePage.css';
import OurOfferingsCard from './components/utils/OurOfferingsCard';
import OurJourneyCard from './components/utils/OurJourneyCard';
import TestimonialCarousel from './components/utils/TestimonialCarousel';

import ACEImage from './components/images/Website Home - ACE.png';
import BrandingImage from './components/images/Website Home - Branding & Sponsorship.png';
import SchoolImage from './components/images/Website Home - In School.png';
import AcademyImage from './components/images/Website Home - Sports Academy.png';

const HomePage = () => {
  return (
    <div className="home-page-main-container">
      <section className="one">
        <div className="homePage-container">
          <img src={HomeImage} alt="Home" className='home-page-image-website'/>
        </div>
        <div className="homePage-mobile-container">
          <img src={HomeMobileImage} className='home-page-image-mobile' alt="" />
        </div>
      </section>

      <section className="two">
        <div className="what-we-do-container">
          <h1 className="what-we-do-container-title">What We Do</h1>
          <div className="what-we-do-container-content-box">
            <div className="what-we-do-container-content">
              <p>
                Welcome to Marcos Quay, where we empower the next generation through comprehensive sports education. Partnering with schools, we deliver expert-led programs that enhance physical skills, teamwork, and sportsmanship. Join us in fostering a healthier, more active future for our kids.
              </p>
              <input type="button" className='getInTouchBtn' value="Get In Touch >" />
            </div>
            <div className="what-we-do-container-images">
              <img src={HomePage1} alt="Description of Image" />
              <img src={HomePage2} alt="Description of Image" />
              <img src={HomePage3} alt="Description of Image" />
            </div>
          </div>
        </div>
      </section>

      <section className="three">
        <div className="ourOfferings-content">
          <h1 className="ourOfferings-container-title">Our Offerings</h1>
          <div className="ourOfferings-card-container">
            <OurOfferingsCard img={SchoolImage} title="In School Programs" content="Aims to inspire a culture of fitness through scientifically researched & result driven programs with a curriculum that is exciting & engaging every student." url="in-school-program" />
            <OurOfferingsCard img={AcademyImage} title="Sports Academy" content="Marcos Quay's Sports Academy provides fun, accessible sports training for children, emphasizing fundamental skills and lifelong passion through certified coaches and diverse activities." url="sports-academy" />
            <OurOfferingsCard img={ACEImage} title="ACE" content="A program dedicated to delivering an unparalleled experience for students, parents, schools, and all stakeholders involved." url="ace" />
            <OurOfferingsCard img={BrandingImage} title="Branding and Sponsorship" content="Partners benefit from brand exposure, targeted seminars, sampling opportunities, and increased foot traffic and web traffic." url="brand-sponsorship" />
          </div>
        </div>
      </section>

      <section className="fourth">
        <div className="ourJourney">
          <h1 className="ourJourney-container-title">Our Journey So far</h1>
          <div className="ourJourney-container-content">
            <OurJourneyCard title="Students Impacted" number="152105+" />
            <OurJourneyCard title="Schools Empowered" number="128+" />
            <OurJourneyCard title="Coaches Trained" number="641+" />
          </div>
        </div>
      </section>

      <TestimonialCarousel />
    </div>
  );
};

export default HomePage;
