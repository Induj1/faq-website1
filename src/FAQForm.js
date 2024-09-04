import React, { useState } from 'react';

const FAQForm = () => {
    const [formData, setFormData] = useState({
        problemName: '',
        email: '',
        phoneNumber: '',
        description: '',
        file: null
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!formData.problemName) formErrors.problemName = 'Problem name is required';
        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email address is invalid';
        }
        if (!formData.phoneNumber) {
            formErrors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            formErrors.phoneNumber = 'Phone number must be 10 digits';
        }
        if (!formData.description) formErrors.description = 'Description is required';
        return formErrors;
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form data submitted:', formData);
            // Handle form submission
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Frequently Asked Question</h2>
            <input
                type="text"
                name="problemName"
                placeholder="Your Name"
                value={formData.problemName}
                onChange={handleChange}
                className={errors.problemName && 'error-input'}
                required
            />
            {errors.problemName && <span className="error-message">{errors.problemName}</span>}
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email && 'error-input'}
                required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
            <input
                type="tel"
                name="phoneNumber"
                placeholder="Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={errors.phoneNumber && 'error-input'}
                required
            />
            {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
            <textarea
                name="description"
                placeholder="Share Feedback"
                value={formData.description}
                onChange={handleChange}
                className={errors.description && 'error-input'}
                required
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
            <input
                type="file"
                name="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FAQForm;
