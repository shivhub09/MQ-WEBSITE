import React from 'react';
import './ACE.css';
import ACE2 from './Our Offerings - ACE 2.png';
import ACE3 from './Our Offerings - ACE 3.png';
import ACE4 from './Our Offerings - ACE 4.png';

const ACE = () => {
  return (
    <div className="ace-main-container">
      <section className='one'>
        <div className="ace-container-one">
          <h2>ACE: Activities for Continuous Enrichment</h2>
        </div>

        <div className="ace-container-one-content">
          <div className="ace-container-one-content-para">
            ACE stands for Activities for Continuous Enrichment, it is a program put in place to go above and beyond just sports and to bring a unique experience for students, parents, schools, and all our stakeholders.
            We think it is important to involve all stakeholders and that communities have great influence. Through organizing enjoyable and leisurely events for parents, educators, and all students of Marcos Quay, we want to foster a sense of community and enhance the quality of services we offer.
            To make sure that everyone involved in our ACE program understands the value of staying in shape and enjoys playing sports, we host a variety of entertaining events and recreational activities, including the Parents League, Inter Marcos Quay Tournament, Students League, Yoga Day, Sports Day, Dads League, and many more.
          </div>

          <div className="ace-container-one-content-image">
            <div className="col1">
              <img src={ACE2} alt="ACE Activity 1" />
              <img src={ACE3} alt="ACE Activity 2" />
            </div>
            <div className="col1">
              <img src={ACE4} alt="ACE Activity 3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ACE;
