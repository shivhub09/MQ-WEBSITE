import React, { useEffect } from 'react';
import './AboutUsPage.css';
import FounderImage from './Website About Us 7.png'
import VisionImage from './Website About Us 3.png';
import MissionImage from './Website About Us 5.png';
import Footer from '../../utils/Footer/Footer';

const AboutUsPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      threshold: 0.5, // Trigger when 50% of the section is visible
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
    <>
      <div className="about-us-main-container">
        <section className='one'>
          <div className="aboutUs-image">
            <div className="text-overlay">
              CREATING A FIT GENERATION
            </div>
          </div>

        </section>


        <section className='two'>
          <div className="AboutUs-content">
            <h1 className="aboutUs-container-title">About Us</h1>

            <div className="aboutUs-note">
              <div className="aboutUs-note-content">
                Founded in 2012, Marcos Quay (MQ) aims to make health a habit. Based in the UK, MQ studied student health and lifestyle nationwide, identifying gaps in sports education. They designed a curriculum tailored for Indian students, addressing issues in standardization, execution, and coaching attitudes.
              </div>
              <div className="video-note">
                <div className="text-row-1">
                  <h1>Who are we?</h1>
                  <h2>Learn more about Marcos Quay</h2>
                </div>
                <div className="text-row-2">
                  <a href="https://www.youtube.com/watch?v=OZY9zMy4qqM">▶️ Watch our Story</a>
                </div>
              </div>
            </div>

            <div className="aboutUs-list">
              <div className="key-Initiative">
                <h1>Key Initiatives</h1>
                <ul>
                  <li><b>Curriculum Design</b> : Developed a scientifically backed sports curriculum for Indian schools.</li>
                  <li><b>Coach Training</b> : Brought trained UK coaches to India to train master coaches locally.</li>
                  <li><b>Student Engagement</b> : Structured programs to engage all students, enhancing overall performance in sports and life.</li>
                </ul>
              </div>

              <div className="career-pathWays">
                <h1>Career Pathways and Leadership</h1>
                <ul>
                  <li><b>Specialized Training </b>: Guides exceptional students towards advanced sports training at top global institutes.</li>
                  <li><b>Industry Leadership</b> : Marcos Quay prioritizes sports and physical health for the next generation in India. Values and Impact</li>
                  <li><b>Character Development</b> : Emphasizes skills and values like hard work, commitment, teamwork, and discipline.</li>
                  <li><b>High-Quality Education</b> : Ensures excellence for students, parents, schools, and stakeholders.</li>
                </ul>
              </div>
            </div>

            <h3 className="aboutUs-summary">
              MQ continues to innovate and lead in sports education, fostering a culture of health and excellence in India.
            </h3>
          </div>
        </section>

        <section className='third'>
          <div className="vision-mission-container">
            <div className="vision-container">
              <img src={VisionImage} alt="" />

              <div className="vision-container-content">
                <h2>Vision</h2>
                <p>Creating a robust culture of Health & Fitness in school through structured sports and physical education.</p>
                <a href="">Get in Touch </a>
              </div>
            </div>
            <div className="mission-container">


              <div className="mission-container-content">
                <h2>Mission</h2>
                <p>To align and include all our stakeholders towards the common mission – Fit School.</p>
                <a href="">Get in Touch </a>
              </div>
              <img src={MissionImage} alt="" />
            </div>
          </div>
        </section>


        <section className='four'>
          <div className="fourth-container">
            <div className="ceo-message-container">
              <div className="ceo-image">
                <img src={FounderImage} alt="Founder Raahil Dhruva" />
              </div>
              <div className="ceo-message-content">
                <h3>OUR FOUNDER</h3>
                <p>
                  Raahil Dhruva, born in Mumbai, was an active child right from a young age. Playing at inter-school, inter-district, and inter-state competitions, Raahil was a champion across multiple sports like tennis, football, running, swimming, and more. Since moving to the UK at age 10, Raahil continued pursuing his passion for tennis and, with the help of excellent school programs, was able to thrive and better his game. To continue playing at a professional level, Raahil trained at the Sutton Tennis Academy to help achieve his goal of representing India at world tournaments.
                </p>
                <p>
                  After multiple victories, Raahil wanted the same kind of opportunities available to more students in India. He went on to study BSc. Entrepreneurship with a minor in Corporate Communications and Finance, at Queens University – Charlotte, North Carolina, on a tennis scholarship, where he represented his university in tournaments across the USA, achieving a ranking of 12 in doubles in the NCAA tournaments.
                </p>
                <p>
                  Raahil has always believed in a good balance between education and an active lifestyle, and he is working to instill this value in all the schools he collaborates with. MQ was started with his vision to make every student an active participant in their day, in society, and throughout their lives.
                </p>
                <h2>Raahil Dhruva</h2>
                <h3>Director | Marcos Quay</h3>
              </div>
            </div>
            <Footer />
          </div>
        </section>

      </div>

    </>

  );
}

export default AboutUsPage;
