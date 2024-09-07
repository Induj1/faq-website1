// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FAQForm from './FAQForm';
import FAQPage from './FAQPage';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<FAQForm />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
