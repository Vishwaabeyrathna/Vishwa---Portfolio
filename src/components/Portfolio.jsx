import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import spiceStoreImg1 from '../assets/images/spice-store1.png';
import spiceStoreImg2 from '../assets/images/spice-store2.png';
import spiceStoreImg3 from '../assets/images/spice-store3.png';
import spiceStoreImg4 from '../assets/images/spice-store4.png';
import spiceStoreImg5 from '../assets/images/spice-store5.png';
import spiceStoreImg6 from '../assets/images/spice-store6.png';
import ft1 from '../assets/images/ft1.png';
import ft2 from '../assets/images/ft2.png';
import ft3 from '../assets/images/ft4.png';
import ft4 from '../assets/images/ft6.png';
import ft5 from '../assets/images/ft7.png';
import ft6 from '../assets/images/ft8.png';
import vaccinationPortalImg from '../assets/images/vaccination-portal.jpg';
import gs1 from '../assets/images/gs1.png';
import gs2 from '../assets/images/gs2.png';
import gs3 from '../assets/images/gs3.png';
import gs4 from '../assets/images/gs4.png';
import gs5 from '../assets/images/gs5.png';
import gs6 from '../assets/images/gs6.png';
import gs7 from '../assets/images/gs7.png';

function Portfolio() {
  const projects = [
    {
      title: 'Spice Store & Management System',
      description: 'My function is User Management, which includes authentication through two-step OTP verification using Brevo SMTP, and authorization through role-based access control. The Admin can perform full CRUD operations on user details, reset passwords,activate or deactivate users, and generate user summary reports.',
      technologies: ['Node.js', 'React.js', 'Express.js', 'MongoDB', 'HTML', 'CSS'],
      images: [spiceStoreImg1,spiceStoreImg2,spiceStoreImg3,spiceStoreImg4,spiceStoreImg5,spiceStoreImg6],
      github: 'https://github.com/niRmana11/SpiceSense_ITP_project',
      demo: '',
    },
    {
      title: 'Finance Tracker App(PocketBrain)',
      description: 'PocketBrain is a personal finance tracker app developed usingAndroid and Kotlin, designed to help users manage income and expenses effectively. It features category-wise analysis, monthly budget tracking, and secure data storage using Shared Preferences. The app also supports data export/import inJSON format and file sharing via FileProvider',
      technologies: ['Kotlin', 'Android Studio', 'SharedPreferences'],
      images: [ft1,ft2,ft3,ft4,ft5,ft6],
      github: 'https://github.com/vishwaabeyrathna/PocketBrain--personalfinanceapp',
      demo: '',
    },
    {
      title: 'Online Vaccination Portal',
      description: 'A web portal for vaccination records using HTML, CSS, JavaScript, and PHP.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      images: [vaccinationPortalImg],
      github: 'https://github.com/vishwaabeyrathna/vaccination-portal',
      demo: '',
    },
    {
      title: 'Gaming Site (OOP Project)',
      description: 'A Java-based gaming site with MySQL, featuring user management and admin CRUD.gaming site built with Eclipse and Java allows user registration, login, and role-based access control. Admins can manage game reviews with full CRUD operations. Userscan submit and view reviews through a JSP interface connected to a MySQL database',
      technologies: ['Java', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      images: [gs1,gs2,gs3,gs4,gs5,gs6,gs7],
      github: 'https://github.com/Vishwaabeyrathna/Legend-Arena---oop-project',
      demo: '',
    },
  ];

  // Variants for animations
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Hero Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-600/20 opacity-50"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* Decorative Shape */}
      <motion.div
        className="absolute top-1/4 right-0 w-1/3 h-2/3 bg-gradient-to-t from-red-500 to-purple-600 opacity-30 rounded-l-full"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight"
          >
            My<span className="text-red-600">Portfolio</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore my latest projects showcasing innovation, skill, and passion in technology.
          </motion.p>
          <motion.a
            href="#projects"
            className="mt-6 inline-block bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            Dive Into Projects
          </motion.a>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          id="projects"
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="mb-6"
              >
                {project.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <motion.img
                      src={image}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-red-500 to-purple-600 text-white text-sm px-3 py-1 rounded-full shadow-md animate-pulse-once"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-6">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 font-medium text-lg"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 font-medium text-lg"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to Collaborate?</h3>
          <p className="text-xl text-gray-600 mb-6 max-w-xl mx-auto">
            Let’s build something amazing together! Check out my projects or get in touch.
          </p>
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Custom animation for one-time pulse effect
const animatePulseOnce = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 0.8,
    times: [0, 0.5, 1],
    repeat: 1,
  },
};

export default Portfolio;