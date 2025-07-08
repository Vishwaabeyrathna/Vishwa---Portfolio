import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // Changed to null to for better control
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Invalid email format';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setStatus({ message: validationError, type: 'error' });
      return;
    }

    setIsLoading(true);
    setStatus(null);

    emailjs
      .send(
        'service_vcyfn6e', // Replace with your EmailJS Service ID
        'template_kvnmusf', // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'Vishwanayanajith43@gmail.com',
        },
        'OkmdYvBpUegZtKxgd' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus({ message: 'Message sent successfully!', type: 'success' });
          setFormData({ name: '', email: '', message: '' });
          // Auto-dismiss popup after 3 seconds
          setTimeout(() => setStatus(null), 3000);
        },
        (error) => {
          console.error('EmailJS error:', error);
          setStatus({ message: `Failed to send message: ${error.text || 'Unknown error'}`, type: 'error' });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-gray-100 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Decorative Shape */}
      <motion.div
        className="absolute top-1/4 right-0 w-1/3 h-2/3 bg-gradient-to-t from-red-500 to-purple-600 opacity-30 rounded-l-full"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Animated Popup */}
      <AnimatePresence>
        {status && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={`p-6 rounded-lg shadow-xl max-w-sm w-full text-center ${
                status.type === 'success' ? 'bg-green-100' : 'bg-red-100'
              }`}
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <h3 className={`text-lg font-semibold ${status.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                {status.type === 'success' ? 'Success!' : 'Error'}
              </h3>
              <p className={`mt-2 ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
              <motion.button
                className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                onClick={() => setStatus(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
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
                />
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.05, rotate: isLoading ? 0 : 2 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                className={`w-full bg-gradient-to-r from-red-500 to-purple-600 text-white py-3 rounded-lg transition-all duration-300 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;