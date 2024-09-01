import React from 'react';
import './AboutUsPage.css';
import FounderImage from './Website About Us 7.png'
import Footer from '../../utils/Footer/Footer';

const AboutUsPage = () => {
  return (
    <>
      <div className="container">
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
                  ▶️ Watch our Story
                </div>
              </div>
            </div>

            <div className="aboutUs-list">
              <div className="key-Initiative">
                <h1>Key Initiatives</h1>
                <ul>
                  <li>Curriculum Design: Developed a scientifically backed sports curriculum for Indian schools.</li>
                  <li>Coach Training: Brought trained UK coaches to India to train master coaches locally.</li>
                  <li>Student Engagement: Structured programs to engage all students, enhancing overall performance in sports and life.</li>
                </ul>
              </div>

              <div className="career-pathWays">
                <h1>Career Pathways and Leadership</h1>
                <ul>
                  <li>Comprehensive career guidance and leadership programs.</li>
                  <li>Opportunities for hands-on learning and development.</li>
                  <li>Focus on holistic growth and long-term success.</li>
                </ul>
              </div>
            </div>

            <h3 className="aboutUs-summary">
              MQ continues to innovate and lead in sports education, fostering a culture of health and excellence in India.
            </h3>
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
