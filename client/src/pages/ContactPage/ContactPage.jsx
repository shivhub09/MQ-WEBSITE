import React,{useEffect} from 'react'
import './ContactPage.css'
import { CiLocationOn } from "react-icons/ci"; // Import relevant icons
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
const ContactPage = () => {
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
    <div className='container'>
      <section className='cpone'>
        <div className='cpcontainer'>
          <div className='cpchild-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7539.869145525307!2d72.83053!3d19.110526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c7ff71ffdb%3A0x696e976124578a30!2sMarcos%20Quay%20Sporting%20Excellence%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1725973618042!5m2!1sen!2sin" width="600" height="450" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='cpchild-container'>
            <div className='address'>
              <h1>Our address</h1>
              <div className='content'>
                <div className='cpicon'>
                  <CiLocationOn size={25} color={"grey"}/>
                </div>
                <div>
                  <div className='company-name'>
                    <p>Marcos Quay Sporting Excellence Pvt Ltd</p>
                  </div>
                  <div className='address-content'>
                    <p>Dev Ashish 24, 3rd Floor, Nutan Laxshmi society, NS Road No 9,
                    Juhu Scheme, Mumbai - 400049 Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='contact-us'>
              <h1>Our contacts</h1>
              <div className='content'>  
                <div className='cpicon'>
                  <IoCallOutline size={25} color={"grey"}/>
                </div>
                <div className='callus'>
                  <p>Call us</p>
                  <div className='phno'>
                    <p><a href="tel:+917506843435">+91-7506843435</a></p>
                    <p><a href="tel:+917738789829">+91-7738789829</a></p>
                    
                  </div>
                </div>
                <div className='cpicon1'>
                  <HiOutlineMailOpen size={25} color={"grey"}/>
                </div>
                <div className='emailus'>
                  <p>Email Us</p>
                  <div className='emailid'>
                    <p><a href='mailto:info@marcosquay.com'>info@marcosquay.com</a></p>
                    <p><a href='mailto:reena.sanghvi@marcosquay.com'>reena.sanghvi@marcosquay.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className='cpicon2'>
                <FaWhatsapp size={25} color={"grey"}/>
                <div className='callus'>
                  <p>Whatsapp us</p>
                </div>
                </div>
                <div className='whno'>
                  <p><a href="tel:+917738789829">+91-7738789829</a></p>
                </div>
               
              </div>
          </div>

      
      </section>
      <section className='cptwo'>
        <div className="cpcontainer">

        </div>
      </section>
</div>
  )
}

export default ContactPage;

