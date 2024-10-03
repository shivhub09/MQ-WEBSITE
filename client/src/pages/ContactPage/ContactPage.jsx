import React, { useEffect, useState } from 'react';
import './ContactPage.css';
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='contact-page-main-container'>
      <section className='contact-section'>
        <div className='contact-info'>
          <div className='map-container'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7539.869145525307!2d72.83053!3d19.110526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c7ff71ffdb%3A0x696e976124578a30!2sMarcos%20Quay%20Sporting%20Excellence%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1725973618042!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marcos Quay Location"
            />
          </div>
          <div className='contact-details'>
            <div className='address-section'>
              <h1>Our Address</h1>
              <div className='address-content'>
                <CiLocationOn size={25} color={"grey"} />
                <div>
                  <p className='company-name'>Marcos Quay Sporting Excellence Pvt Ltd</p>
                  <p className='address-text'>Dev Ashish 24, 3rd Floor, Nutan Laxshmi society, NS Road No 9,
                    Juhu Scheme, Mumbai - 400049 Maharashtra, India</p>
                </div>
              </div>
            </div>
            <div className='contact-methods'>
              <h1>Contact Us</h1>
              <div className='contact-item'>
                <IoCallOutline size={25} color={"grey"} />
                <div>
                  <p>Call Us</p>
                  <a href="tel:+917506843435">+91-7506843435</a>
                  <a href="tel:+917738789829">+91-7738789829</a>
                </div>
              </div>
              <div className='contact-item'>
                <HiOutlineMailOpen size={25} color={"grey"} />
                <div>
                  <p>Email Us</p>
                  <a href="mailto:info@marcosquay.com">info@marcosquay.com</a>
                  <a href="mailto:reena.sanghvi@marcosquay.com">reena.sanghvi@marcosquay.com</a>
                </div>
              </div>
              <div className='contact-item'>
                <FaWhatsapp size={25} color={"grey"} />
                <div>
                  <p>Whatsapp Us</p>
                  <a href="tel:+917738789829">+91-7738789829</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form (Reverted to original UI) */}
      <section className='form-section'>
        <div className='form-container'>
          <h1>Contact Us</h1>
          <p>We'd love to talk about how we can help you.</p>
          <div className="form-box">
            <h2>Fill in the Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
