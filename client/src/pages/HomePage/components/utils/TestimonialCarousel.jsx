import React from 'react';
import Slider from "react-slick";
import "./TestimonialCard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from './TestimonialCard'; // assuming you have this component
import './Testimonial.css'
import Footer from '../../../../utils/Footer/Footer';
const TestimonialCarousel = () => {
  const settings = {
    dots: true,                 // Enable dots for navigation
    infinite: true,             // Infinite loop
    speed: 500,                 // Transition speed in ms
    slidesToShow: 1,            // Show one slide at a time
    slidesToScroll: 1,          // Scroll one slide at a time
    autoplay: true,             // Enable autoplay
    autoplaySpeed: 2500,        // Delay between each slide in ms
  };

  return (
    <>
      <section className="fifth">
        <div className="testimonal">
          <h1 className="testimonal-container-title">Testimonial</h1>
          <div className="testimonal-container-content">
            <Slider {...settings}>
              <TestimonialCard
                content="Marcos Quay Sports Academy is associated with our school, Shree Chandulal Nanavati Vinay Mandir from year 2016. Their sports and athletic activities provide a plethora of benefits to our children for their achievement in sports. With Marcos Quay's support & guidance, school has participated in many ICSE level Interschool events such as Football, Basketball, Kabaddi, Carrom, Swimming, Artistic Yoga competitions and we are proud to say that our school won 1st prize in Artistic Yoga Competition among 11 schools & secured 3rd place in Kabaddi Competition Girls U/17."
                name="Mrs. Nilam Moolchandani"
                position="Principal | Shree Chandulal Nanavati Vinay Mandir"
              />
              <TestimonialCard
                content="On behalf of Nilkamal management and our employees, we would like to thank you and the entire team for excellent execution of True Blue event as part of our employee engagement initiative. Even though we were more than 500 employees, the entire event was executed in a seamless manner by your team. While all our employees bonded with each other so well, we also did learn a lot about team working from the event organisation and execution. Feedback from our senior management team and all employees was very positive. The energy in the office even after the event is positive and we are getting request to repeat the event. We once again thank you all and wish team MARCOS QUAY the very best."
                name="Vinod Parur"
                position="HR head | Nilkamal Limited"
              />
              <TestimonialCard
                content="Marcos Quay coaches (Irfan, Prabhu, Saif and Simran) are working in good coordination for conducting PE sessions from 23rd June 2020. I am frequently coordinating with all the coaches through online meetings and calls for arranging various workout plans for every week as per the grades. I must acknowledge all the coaches associated with 18/S for their efforts, dedication, punctuality, hard work and coordination for conducting the classes smoothly as per the requirements of the school. Students are showing interest in performing the skills taught to them and even enjoying taking part in challenging activities planned for them. Overall the planning, preparation and delivery of the PE sessions by each coach is commendable. We hope to receive the support and cooperation from MQ team in the future too."
                name="Mr. Gaurav Desai"
                position="Sports Coordinator | The Nahar International School- Powai, Mumbai"
              />
              <TestimonialCard
                content="Technology is merely an augmentation to a teacher. It can help the process of learning, but it certainly cannot replace the role of the teacher. We appreciate all your hard work, patience and the positive learning environment you provide for our students on this virtual platform. In times when the children are at home regular physical activity is of utmost importance and through your videos taken in natural surroundings am sure the students will feel encouraged to exercise. Continue providing the children with good videos as exercise not only changes your body, it changes your mind, your attitude and your mood."
                name="Dr. Pearl Hilloo"
                position="Primary Head | The Bai Avabai Petit Girls School - Mumbai"
              />
              <TestimonialCard
                content="This is to put on record, the successful handling of the event 'Sunny Sunday Sports' session (Conducted as part of the theme 'Willingness to Wellness') for parents of STKIIS on 20th Feb'22 by the team from Marcos Quay. A crowd of about 200 people was very well managed by the team, methodically planned activities, engaging each and every participant and ensuring punctuality and maintaining an atmosphere of true sports spirit. It was a significant Sunday for parents to have come out after the 2 year long pandemic crisis. As a whole the team is doing a good job Waiting for the school teams to bring laurels to school. Kudos!!"
                name="Ms. Anjali Mahajan"
                position="Principal | St Kabir Indian International School - Chapad, Vadodara"
              />
            </Slider>

          </div>
        </div>
        <div className="footer">
          <Footer></Footer>
        </div>
      </section>
    </>

  );
}

export default TestimonialCarousel;
