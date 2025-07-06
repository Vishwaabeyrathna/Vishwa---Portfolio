import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import spiceStoreImg from '../assets/images/spice-store.jpg';
import financeTrackerImg from '../assets/images/finance-tracker.jpg';
import vaccinationPortalImg from '../assets/images/vaccination-portal.jpg';
import gamingSiteImg from '../assets/images/gaming-site.jpg';

function Portfolio() {
  const projects = [
    {
      title: 'Spice Store and Management System',
      description: 'A full-stack MERN application for managing a spice store, featuring Node.js, React.js, Express.js, MongoDB, Postman API, HTML, and CSS.',
      technologies: ['Node.js', 'React.js', 'Express.js', 'MongoDB', 'Postman API', 'HTML', 'CSS'],
      images: [spiceStoreImg],
      github: 'https://github.com/vishwaabeyrathna/spice-store',
      demo: '', // Replace with actual demo link or leave empty if not available
    },
    {
      title: 'Finance Tracker App',
      description: 'An Android application built with Kotlin and SharedPreferences in Android Studio for tracking personal finances.',
      technologies: ['Kotlin', 'Android Studio', 'SharedPreferences'],
      images: [financeTrackerImg],
      github: 'https://github.com/vishwaabeyrathna/finance-tracker',
      demo: '', // Replace with actual demo link or leave empty
    },
    {
      title: 'Online Vaccination Portal',
      description: 'A web-based portal for managing vaccination records, developed using HTML, CSS, JavaScript, and PHP.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      images: [vaccinationPortalImg],
      github: 'https://github.com/vishwaabeyrathna/vaccination-portal',
      demo: '', // Replace with actual demo link or leave empty
    },
    {
      title: 'Gaming Site (OOP Project)',
      description: 'A Java-based gaming site with MySQL, featuring user registration, login, role-based access control, and admin CRUD operations.',
      technologies: ['Java', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      images: [gamingSiteImg],
      github: 'https://github.com/vishwaabeyrathna/gaming-site',
      demo: '', // Replace with actual demo link or leave empty
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-violet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-6 text-center"
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-lg p-6 glassmorphism hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="mb-4"
              >
                {project.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-text mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-violet-primary text-white text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-primary hover:text-violet-secondary transition-colors"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-primary hover:text-violet-secondary transition-colors"
                  >
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;