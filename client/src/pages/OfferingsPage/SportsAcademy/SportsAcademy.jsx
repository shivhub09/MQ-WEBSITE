import React from 'react';
import './SportsAcademy.css';
import SportsComplexImage from './Website Our Offerings - MQ Sports Academy.png';

const SportsAcademy = () => {

  return (
    <div className='sportsAcademy-main-container'>
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
    </div>
  );
};

export default SportsAcademy;
