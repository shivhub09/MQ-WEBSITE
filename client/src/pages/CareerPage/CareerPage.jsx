import { useState } from 'react';
import React from 'react'
import './CareerPage.css';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    cv: null
  });
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv') {
      setFormData({ ...formData, [name]: files[0] });
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

  return (
    <div className='main-container1'>
      <div className='row1'>
        <h1>Join Our Growing Team</h1>
      </div>
      <div className='forms'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="details">
            <label htmlFor="email">Email</label>
            <div className="details1">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="details">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <div className="details1">
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
            />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cv">Upload CV</label>
            <input
              type="file"
              id="cv"
              name="cv"
              onChange={handleChange}
              accept=".pdf"
              required
            />
            <small>Upload only PDF files, and the file size should be less than 2MB.</small>
          </div>
          <button type="submit" className="submit-button">Submit Now</button>
        </form>
    </div>
    </div>  
  );
};

export default CareerPage;