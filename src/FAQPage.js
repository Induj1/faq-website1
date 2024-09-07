// src/components/FAQPage.js
import React, { useState } from 'react';
import './FAQPage.css';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setMessage('Thank you for your question. We will get back to you soon.');
    setSearchQuery('');
  };

  return (
    <div className="faq-page">
      <header className="faq-header">
        <h1>Frequently Asked Questions</h1>
      </header>
      <div className="faq-content">
        <div className="faq-card">
          <h2>Question 1</h2>
          <p>Answer to question 1.</p>
        </div>
        <div className="faq-card">
          <h2>Question 2</h2>
          <p>Answer to question 2.</p>
        </div>
      </div>
      <div className="ask-me-anything">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Ask your question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {message && <p className="response-message">{message}</p>}
      </div>
    </div>
  );
};

export default FAQPage;
