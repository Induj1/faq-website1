// src/components/FAQForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FAQForm.css';

const FAQForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    document: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, document: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here

    // Redirect to FAQPage after form submission
    navigate('/faq');
  };

  return (
    <div className="faq-form-container">
      <h1 className="form-heading">Submit Your Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="document">Upload Document</label>
          <input
            type="file"
            id="document"
            name="document"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FAQForm;
