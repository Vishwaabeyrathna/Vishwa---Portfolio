import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_vcyfn6e', // Replace with your EmailJS service ID
        'template_kvnmusf', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'Vishwanayanajith43@gmail.com',
        },
        'OkmdYvBpUegZtKxgd' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus(`Failed to send message: ${error.text || 'Unknown error'}`);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-r from-gray-100 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Decorative Shape */}
      <motion.div
        className="absolute top-1/4 right-0 w-1/3 h-2/3 bg-gradient-to-t from-red-500 to-purple-600 opacity-30 rounded-l-full"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10"
        >
          Get in <span className="text-red-600">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white bg-opacity-90 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Contact Details</h3>
            <p className="text-gray-600 text-lg mb-3">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:Vishwanayanajith43@gmail.com"
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                Vishwanayanajith43@gmail.com
              </a>
            </p>
            <p className="text-gray-600 text-lg mb-3">
              <strong>Phone:</strong> <span className="text-red-600">+94 716 773 206</span>
            </p>
            <p className="text-gray-600 text-lg mb-3">
              <strong>Address:</strong> 546/3, Uthuwankanda, Samadhimawatha, Mawanella
            </p>
            <p className="text-gray-600 text-lg mb-3">
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/vishwaabeyrathna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                github.com/vishwaabeyrathna
              </a>
            </p>
            <p className="text-gray-600 text-lg">
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/vishwa-abeyrathna-082906372"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                linkedin.com/in/vishwa-abeyrathna
              </a>
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white bg-opacity-90 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <motion.input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-400 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <motion.input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-400 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-400 transition-all duration-300"
                  rows="5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  required
                ></motion.textarea> {/* Ensure proper closing tag */}
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-red-500 to-purple-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                Send Message
              </motion.button>
              {status && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center text-lg text-gray-800"
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;