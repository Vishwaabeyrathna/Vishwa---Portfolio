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
        'service_vcyfn6e',
        'template_kvnmusf',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'Vishwanayanajith43@gmail.com',
        },
        'OkmdYvBpUegZtKxgd'
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
    <section id="contact" className="py-20 bg-gradient-violet">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-6 text-center"
        >
          Contact Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-text mb-2">
              <strong>Email:</strong> Vishwanayanajith43@gmail.com
            </p>
            <p className="text-gray-text mb-2">
              <strong>Phone:</strong> +94 716 773 206
            </p>
            <p className="text-gray-text mb-2">
              <strong>Address:</strong> 546/3, Uthuwankanda, Samadhimawatha, Mawanella
            </p>
            <p className="text-gray-text mb-2">
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/vishwaabeyrathna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-primary hover:text-violet-secondary transition-colors"
              >
                github.com/vishwaabeyrathna
              </a>
            </p>
            <p className="text-gray-text">
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/vishwa-abeyrathna-082906372"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-primary hover:text-violet-secondary transition-colors"
              >
                linkedin.com/in/vishwa-abeyrathna
              </a>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glassmorphism p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-2 bg-white bg-opacity-10 border border-violet-primary rounded focus:outline-none focus:ring-2 focus:ring-violet-primary text-white placeholder-gray-text"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-2 bg-white bg-opacity-10 border border-violet-primary rounded focus:outline-none focus:ring-2 focus:ring-violet-primary text-white placeholder-gray-text"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-2 bg-white bg-opacity-10 border border-violet-primary rounded focus:outline-none focus:ring-2 focus:ring-violet-primary text-white placeholder-gray-text"
                  rows="5"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-violet-primary text-white py-2 rounded hover:bg-violet-secondary transition-colors"
              >
                Send Message
              </motion.button>
              {status && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center text-white"
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