import React, { useState } from 'react';
import './CareerPage.css';

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

  return (
    <div className="form-container">
      <h1 className="form-title">Join Our Growing Team</h1>
      {submitted ? (
        <div className="alert">
          <p>Thank you for your application! We'll be in touch soon.</p>
        </div>
      ) : (
        <div className='container-2'>
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
        </div>
      )}
    </div>
  );
};

export default CareerPage;