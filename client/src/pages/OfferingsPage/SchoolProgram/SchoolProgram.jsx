import React, { useEffect } from 'react'
import './SchoolProgram.css'
import OurOfferingsImage1 from './Our Offerings - Smart Start 2.png';
import OurOfferingsImage2 from './Our Offerings - Smart Start 3.png';
import WhyChooseUs from './Website Our Offerings - Why choose us.png';

import OurProcess from './Our Process.png';

const SchoolProgram = () => {
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
        <div className="foundations">
          <div className="schoolProgram-title">
            <h2>In School Program</h2>
          </div>
          <div className="schoolProgram-subtitle">
            <h1>Smart Start for Pre-Primary- Building Foundations for Future Stars</h1>
          </div>
          <div className="schoolProgram-container-one">
            <div className="container-one-content">
              Our Smart Start program isn't just about play – it's about laying the groundwork for a lifetime of athletic success. Designed specifically for pre-primary students, this program focuses on essential skills. Through age-appropriate activities and playful learning, children develop these essential skills, setting the stage for future success in physical education and sports.
            </div>
            <div className="container-one-image">
              <img src={OurOfferingsImage1} alt="" />
            </div>
          </div>
          <div className="schoolProgram-container-one">
            <div className="container-one-content">
              <h1>Key Focus Areas</h1>
              <br />
              <ul className="content-list-items">
                <li> <b>Agility, Balance & Coordination:</b> Essential skills for physical development.</li>
                <li><b>Fine and Gross Motor Skills:</b> Building a strong foundation for future success</li>
                <li><b>Introduction to Fundamental Skills: </b>Engaging in movements fundamental to multi-sports such as catching, throwing, changing directions, and spatial awareness.</li>
              </ul>
            </div>
            <div className="container-one-image">
              <img src={OurOfferingsImage2} alt="" />
            </div>
          </div>


        </div>
      </section>

      <section className='two'>
        <div className="foundations">
          <div className="schoolProgram-subtitle">
            <h1>Active PE for Grade 1 and Beyond: Elevating Physical Literacy</h1>
          </div>
          <div className="schoolProgram-container-one">
            <div className="container-one-content">
              Starting from Grade 1, our Active PE program enhances physical literacy and multi-sport skills through a structured and engaging curriculum. With a focus on health, fitness, and sport-specific training, students are introduced to a variety of sports, promoting overall wellness and a love for physical activity.
            </div>
            <div className="container-one-image">
              <img src={OurOfferingsImage1} alt="" />
            </div>
          </div>
          <div className="schoolProgram-container-one">
            <div className="container-one-content">
              <h1>Key Focus Areas</h1>
              <br />
              <ul className="content-list-items">
                <li> <b>Health and Fitness</b> Promoting a culture of wellness.</li>
                <li><b>Sport-Specific Training</b> Exposure to indoor and outdoor sports</li>
                <li><b>School Team Creating and Development: </b>Encouraging teamwork and school spirit
                </li>
                <li><b>Exposure to Competitions and Tournaments </b>Providing opportunities for students to showcase their skills.
                </li>
                <li><b>Scientifically researched curriculum </b>Engaging and exciting for every student.
                </li>
              </ul>
            </div>
            <div className="container-one-image">
              <img src={OurOfferingsImage2} alt="" />
            </div>
          </div>


        </div>

      </section>

      <section className='two'>
        <div className="foundations">
          <div className="schoolProgram-subtitle">
            <h1>Why Choose Us?</h1>
          </div>
          <div className="schoolProgram-container-one">
            <div className="container-one-content">
              <br />
              <ul className="content-list-items">
                <li><b>Certified and Experienced Coaches:</b> Professional guidance for optimal development.</li>
                <li><b>Sports-Specific Coaches:</b> Expertise in various sports disciplines.</li>
                <li><b>Optimal Student-Coach Ratio:</b> Ensuring personalized attention.</li>
                <li><b>Comprehensive Equipment:</b> All necessary sports and physical education gear included.</li>
                <li><b>Structured Curriculum:</b> Fitness-based activities with a focus on fun and learning.</li>
                <li><b>Optimal Use of School Infrastructure:</b> Leveraging sports facilities to create a Sports Academy for post-school hours.</li>
                <li><b>Upgrade and Maintain School Infrastructure:</b> Enhancing the quality of sports facilities.</li>
                <li><b>Boost Admissions through Sports Infrastructure:</b> Leveraging state-of-the-art sports facilities to attract new students.</li>
              </ul>
            </div>
            <div className="container-one-image">
              <img src={WhyChooseUs} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='three'>
        <div className="foundations">
          <div className="schoolProgram-container-one">
            <div className="ourProcess-container-one-image">
              <img src={OurProcess} alt="" />
            </div>
            <div className="ourProcess-container-one-content">
              <h1>Our Process</h1>
              <p>At Marcos Quay, we continually advance our curriculum, training, and coaching methods. We are committed to providing a high-quality curriculum and well-trained coaches. We regularly review and adjust our curriculum to meet the needs of schools and students. Our focus on coach training ensures effective curriculum delivery, first aid, and injury prevention proficiency, and the ability to assess student performance accurately.</p>
            </div>

          </div>
        </div>
      </section>



    </div>
  )
}

export default SchoolProgram
