import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your Public Key
emailjs.init('OkmdYvBpUegZtKxgd'); // Replace with your EmailJS Public Key

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);