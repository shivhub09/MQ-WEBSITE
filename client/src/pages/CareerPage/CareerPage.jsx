import React, { useState, useEffect } from 'react';
import './CareerPage.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Footer from '../../utils/Footer/Footer';
const CareerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    cv: null
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf' && file.size <= 2 * 1024 * 1024) {
      setFormData({ ...formData, cv: file });
      setErrors({ ...errors, cv: '' });
    } else {
      setErrors({ ...errors, cv: 'Please upload a PDF file less than 2MB in size.' });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
    if (!formData.cv) newErrors.cv = 'CV is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };
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

      <section className='one'>
        <div className='first'>
          <div className="form-container">
            <h1 className="form-title">Join Our Growing Team</h1>
            {submitted ? (
              <div className="alert">
                <p>Thank you for your application! We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  {errors.fullName && <p className="error">{errors.fullName}</p>}
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                    />
                    {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cv">Upload CV</label>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    accept=".pdf"
                  />
                  <p className="file-info">Upload only pdf file allowed & file size will be less than 2MB</p>
                  {errors.cv && <p className="error">{errors.cv}</p>}
                </div>
                <button type="submit" className="submit-button">Submit Now</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className='two'>
        <div className='second2'>
          <div className='container3'>
            <h3 className='tt'>CONTACT US</h3>
            <h1 className="form-title">Get In Touch</h1>
          </div>
          <div className='main-container'>
            <div className='child-container'>
              <h1>Dial In</h1>
              <div className='details' id="Dial">
                <a href="tel:+917506843435">+91-75068 43435</a>
              </div>
              <div className='details' id="Dial">
                <a href="tel:+917738789829">+91-77387 89829</a>
              </div>
            </div>
            <div className='child-container'>
              <h1>Email Id</h1>
              <div className='details'>
                <a href='mailto:jobs@marcosquay.com'>jobs@marcosquay.com</a>
              </div>
              <div className='details'>
                <a href='mailto:info@marcosquay.com'>info@marcosquay.com</a>
              </div>
              <div className='details'>
                <a href='mailto:reena.sanghvi@marcosquay.com'>reena.sanghvi@marcosquay.com</a>
              </div>
            </div>
            <div className='child-container'>
              <h1>Social Media</h1>
              <div className='details'>
                <FaWhatsapp />
                <a target="blank" title='Click to contact us on whatsapp' href='https://api.whatsapp.com/send/?phone=7738789829&text&type=phone_number&app_absent=0'>Whatsapp</a>
              </div>
              <div className='details'>
                <FaFacebook />
                <a target="blank" title="Click to view Facebook link of Marcos Quay" href='https://www.facebook.com/marcosquay'>Facebook</a>
              </div>
              <div className='details'>
                <FaInstagram />
                <a target="blank" title="Click to view Instagram link of Marcos Quay" href='https://www.instagram.com/marcosquay/'>Instagram</a>
              </div>
              <div className='details'>
                <FaLinkedin />
                <a target="blank" title="Click to view LinkedIn link of Marcos Quay" href='https://www.linkedin.com/company/marcosquay'>LinkedIn</a>
              </div>
              <div className='details'>
                <FaYoutube />
                <a target="blank" title="Click to view Youtube link of Marcos Quay" href='https://www.youtube.com/channel/UCKvDIPPrvaVHjtqcr-ZYJow?view_as=subscribery'><i class="fab fa-youtube"></i>Youtube</a>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};

export default CareerPage;