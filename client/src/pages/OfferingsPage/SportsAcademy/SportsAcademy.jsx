import React, { useEffect } from 'react';
import './SportsAcademy.css';
import SportsComplexImage from './Website Our Offerings - MQ Sports Academy.png';
import SportsOurOfferings from './Our Offerings - Sports Academy Image.png';

const SportsAcademy = () => {

  return (
    <div className='container'>
      <section className='one'>
        <div className="sports-program-container-one">
          <h2>Marcos Quay Sports Academy (Elite Sports Program)</h2>
          <h1>Accessible and Fun Sports Training</h1>
          <div className="sports-program-container-one-content">
            <div className="sports-program-container-one-image">
              <img src={SportsComplexImage} alt="Sports Complex" />
            </div>

            <div className="sports-program-container-one-content-para">
              <h1>Grassroots Training: Building the Foundation for Future Athletes</h1>
              <p>At the heart of Marcos Quay is our Sports Academy, which aims to make sports training accessible and enjoyable for every child. We provide certified coaches and a meticulously curated training plan that combines fun with the latest equipment. Our approach ensures that children not only learn the fundamentals of sports but also enjoy the process, fostering a lifelong love for physical activity. Our primary aim is to provide top-quality training at the grassroots level, laying a strong foundation for future athletes and sports persons. We focus on delivering high-quality coaching with certified professionals and state-of-the-art equipment. By doing so, we create pathways for students to explore the vast opportunities available in the world of sports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Uncomment and modify section two when needed */}
      {/* <section className='two'>
        <div className="sports-program-container-two">
          <div className="sports-program-container-two-content">
            <div className="sports-program-container-two-content-para">
              <h1>Why Choose Us?</h1>
              <ul>
                <li><b>Certified Coaches </b>Our team comprises experienced and certified coaches dedicated to
                  providing the best training</li>
                <li><b>Latest Equipment:</b> We use the latest sports equipment to ensure effective and enjoyable
                  training sessions</li>
                <li><b>Inclusive Programs:</b> Our activties and events are designed to be inclusive, catering to all ages
                  and abilies.</li>
                <li><b>Community Engagement:</b> We foster a sense of community through our recreational activites,
                  promoting a healthier lifestyle for everyone involved.</li>
                <li><b>Grassroots Focus:</b> We are committed to strengthening the foundation of sports education at
                  the grassroots level, nurturing future talents.</li>
                <li><b>Exposure to Competitive Matches:</b> We make sure every student gets an opportunity to
                  experience match-like situations and play several competitive matches to gain confidence and
                  ability to perform under pressure.</li>
              </ul>
            </div>
            <div className="sports-program-container-two-content-image">
              <img src={SportsOurOfferings} alt="" />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default SportsAcademy;
