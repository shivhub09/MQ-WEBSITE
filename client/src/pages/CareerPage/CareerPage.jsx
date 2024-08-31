import { useState } from 'react';
import React from 'react'
import './CareerPage.css';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    cv: null,
  });
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
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
}
export default CareerPage