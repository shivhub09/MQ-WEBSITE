import React from 'react';
import HomeImage from './components/images/Website Home2.jpg';
import HomePage1 from './components/images/About-Us-1.png';
import HomePage2 from './components/images/About-Us-2.png';
import HomePage3 from './components/images/About-Us-3.png';
import './HomePage.css';
import OurOfferingsCard from './components/utils/OurOfferingsCard';
import OurJourneyCard from './components/utils/OurJourneyCard';
import TestimonialCard from './components/utils/TestimonialCard';
import TestimonialCarousel from './components/utils/TestimonialCarousel';
import Footer from '../../utils/Footer/Footer';

const HomePage = () => {
  return (
    <div class="container">

      <section class="one">
        <div className="homePage-container">
          <img src={HomeImage} alt="Home" />

        </div>
      </section>


      <section class="two">
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
      </section>

      <section className="three">

        <div className="ourOfferings-content">
          <h1 className="ourOfferings-container-title">Our Offerings</h1>
          <div className="ourOfferings-card-container">
            <OurOfferingsCard img={HomePage1} title="In School Programs" content="Aims to inspire a culture of fitness through scientifically researched & result driven programs with a curriculum that is exciting & engaging every student." url="This is the url" />
            <OurOfferingsCard img={HomePage1} title="Sports Academy" content="Marcos Quay's Sports Academy provides fun, accessible sports training for children, emphasizing fundamental skills and lifelong passion through certified coaches and diverse activities." url="This is the url" />
            <OurOfferingsCard img={HomePage1} title="ACE" content="A program dedicated to delivering an unparalleled experience for students, parents, schools, and all stakeholders involved." url="This is the url" />
            <OurOfferingsCard img={HomePage1} title="Branding and Sponsorship" content="Partners benefit from brand exposure, targeted seminars, sampling opportunities, and increased foot traffic and web traffic." url="This is the url" />
          </div>
        </div>

      </section>


      <section class="fourth">
        <div className="ourJourney">
          <h1 className="ourJourney-container-title">Our Journey So far</h1>
          <div className="ourJourney-container-content">
            <OurJourneyCard title="Student Impacted" number="152105+"></OurJourneyCard>
            <OurJourneyCard title="Schools Empowered" number="128+"></OurJourneyCard>
            <OurJourneyCard title="Coaches Trained" number="641+"></OurJourneyCard>
          </div>
        </div>
      </section>

      {/* <section class="fifth">
        <div className="testimonal">
          <h1 className="testimonal-container-title">Testimonial</h1>
          <div className="testimonal-container-content">
            <TestimonialCard content="Marcos Quay Sports Academy is associated with our school, Shree Chandulal Nanavati Vinay Mandir from year 2016. Their sports and athletic activities provide a plethora of benefits to our children for their achievement in sports. With Marcos Quay' s support & guidance, school has participated in many ICSE level Interschool events such as Football, Basketball, Kabaddi, Carrom, Swimming, Artistic Yoga competitions and we are proud to say that our school won 1st prize in Artistic Yoga Competition among 11 schools & secured 3rd place in Kabaddi Competition Girls U/17." name="Mrs. Nilam Moolchandani" position="Principal | Shree Chandulal Nanavati Vinay Mandir
"></TestimonialCard>
            <TestimonialCard content="Marcos Quay Sports Academy is associated with our school, Shree Chandulal Nanavati Vinay Mandir from year 2016. Their sports and athletic activities provide a plethora of benefits to our children for their achievement in sports. With Marcos Quay' s support & guidance, school has participated in many ICSE level Interschool events such as Football, Basketball, Kabaddi, Carrom, Swimming, Artistic Yoga competitions and we are proud to say that our school won 1st prize in Artistic Yoga Competition among 11 schools & secured 3rd place in Kabaddi Competition Girls U/17." name="Mrs. Nilam Moolchandani" position="Principal | Shree Chandulal Nanavati Vinay Mandir
"></TestimonialCard>
            <TestimonialCard content="Marcos Quay Sports Academy is associated with our school, Shree Chandulal Nanavati Vinay Mandir from year 2016. Their sports and athletic activities provide a plethora of benefits to our children for their achievement in sports. With Marcos Quay' s support & guidance, school has participated in many ICSE level Interschool events such as Football, Basketball, Kabaddi, Carrom, Swimming, Artistic Yoga competitions and we are proud to say that our school won 1st prize in Artistic Yoga Competition among 11 schools & secured 3rd place in Kabaddi Competition Girls U/17." name="Mrs. Nilam Moolchandani" position="Principal | Shree Chandulal Nanavati Vinay Mandir
"></TestimonialCard>
          </div>
        </div>
      </section> */}

      <TestimonialCarousel></TestimonialCarousel>
    </div>
  );
}

export default HomePage;
