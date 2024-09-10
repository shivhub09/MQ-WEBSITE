import React, { useEffect } from 'react';
import './SportsAcademy.css';
import SportsComplexImage from './Website Our Offerings - MQ Sports Academy.png';
import SportsOurOfferings from './Our Offerings - Sports Academy Image.png';

const SportsAcademy = () => {

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

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
              <p>At the heart of Marcos Quay is our Sports Academy, which aims to make sports
                training accessible and enjoyable for every child. We provide certified coaches and a
                meticulously curated training plan that combines fun with the latest equipment.
                Our approach ensures that children not only learn the fundamentals of sports but
                also enjoy the process, fostering a lifelong love for physical activity. Our primary aim
                is to provide top-quality training at the grassroots level, laying a strong foundation
                for future athletes and sports persons.</p>
            </div>
          </div>
        </div>
      </section>


      <section className='two'>
        <div className="sports-program-container-two">
          <div className="sports-program-container-two-content">
            <div className="sports-program-container-two-content-para">
              <h1>Why Choose Us?</h1>
              <ul>
                <li><b>Cerfied Coaches </b>Our team comprises experienced and cerfied coaches dedicated to
                  providing the best training</li>
                <li><b>Latest Equipment:</b> We use the latest sports equipment to ensure effecve and enjoyable
                  training sessions</li>
                <li><b>Inclusive Programs:</b> Our acvies and events are designed to be inclusive, catering to all ages
                  and abilies.</li>
                <li><b>Community Engagement:</b> We foster a sense of community through our recreaonal acvies,
                  promong a healthier lifestyle for everyone involved.</li>
                <li><b>Grassroots Focus</b> We are commied to strengthening the foundaon of sports educaon at
                  the grassroots level, nurturing future talents</li>
                <li><b>Exposure to Compeve Matches</b> We make sure every student gets an opportunity to
                  experience match-like situaons and play several compeve matches to gain confidence and
                  ability to perform under pressure.</li>
              </ul>
            </div>

            <div className="sports-program-container-two-content-image">
              <img src={SportsOurOfferings} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsAcademy;
