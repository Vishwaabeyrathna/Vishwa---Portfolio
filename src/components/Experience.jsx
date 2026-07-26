import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// EWIS Digital Signage System — on-site deployment photos
import ds1 from '../assets/images/ds1.jpeg';
import ds2 from '../assets/images/ds2.jpeg';
import ds3 from '../assets/images/ds3.jpeg';
import ds4 from '../assets/images/ds4.jpeg';
import ds5 from '../assets/images/ds5.png';
import ds6 from '../assets/images/ds6.png';

function Experience() {
  const experiences = [
    {
      company: 'E-W Information Systems (Pvt) Ltd',
      role: 'Software Engineering Intern',
      period: 'Jan 2026 – Jul 2026',
      location: 'Sri Lanka',
      projects: [
        {
          title: 'EWIS Digital Signage System',
          points: [
            'Designed the microservices architecture and built the backend for a multi-tenant digital signage platform that manages and displays content across TV screens and kiosks.',
            'Implemented multi-tenancy with per-tenant isolation, Keycloak authentication, MinIO media storage, a WebSocket real-time layer, and a standalone License Server.',
            'Containerised the stack with Docker and packaged a Windows kiosk application via Electron, through to on-site deployment; now running in production at Hilton.',
          ],
          technologies: ['Node.js', 'React', 'MongoDB', 'Keycloak', 'MinIO', 'Docker', 'Electron'],
          images: [
            { src: ds1, caption: 'Kiosk players registered and awaiting content at the Hilton site' },
            { src: ds2, caption: 'Menu board content live across three portrait screens' },
            { src: ds3, caption: 'Players idling on the standby screen between scheduled playlists' },
            { src: ds4, caption: 'Synchronised video playback driven from the admin dashboard' },
            { src: ds5, caption: 'Admin dashboard: per-tenant TV device management with live status, zones and remote actions' },
            { src: ds6, caption: 'Standalone License Server: tenant activation key generation with expiry and feature flags' },
          ],
        },
        {
          title: 'GSMBTS ERP Implementation (Odoo 19)',
          points: [
            'Built a custom Odoo addon automating the Finance Plan-to-Budget workflow for GSMB Technical Services, based on an AS-IS process study.',
            'Delivered data models, views, business logic, access rights, and a QWeb report; validated with testing and a supervisor demo before handover.',
          ],
          technologies: ['Odoo 19', 'Python', 'PostgreSQL', 'QWeb'],
        },
        {
          title: 'Branch Letter Application — Requirement Gap Fixing',
          points: [
            'Closed behavioural gaps between a legacy system and its rewritten version to achieve functional parity for a financial-sector client.',
            'Worked from a documented gap list, resolved assigned items, tested, and handed over for review; delivered under client confidentiality.',
          ],
          technologies: ['.NET', 'React', 'Docker'],
        },
      ],
    },
  ];

  // Variants for animations (matching Portfolio section)
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Hero Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-600/20 opacity-50"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      {/* Decorative Shape - Hidden on mobile */}
      <motion.div
        className="hidden sm:block absolute top-1/4 left-0 w-1/3 h-2/3 bg-gradient-to-t from-red-500 to-purple-600 opacity-30 rounded-r-full"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-3 sm:mb-4 leading-tight"
          >
            Work <span className="text-red-600">Experience</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto"
          >
            Hands-on software engineering experience delivering production systems in an industry setting.
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="space-y-6 sm:space-y-8 lg:space-y-10"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">{experience.company}</h3>
                  <p className="text-red-600 font-medium text-sm sm:text-base md:text-lg mt-1">{experience.role}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-gray-600 text-sm sm:text-base">{experience.period}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{experience.location}</p>
                </div>
              </div>

              {/* Projects at this company */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {experience.projects.map((project, projectIndex) => (
                  <motion.div
                    key={projectIndex}
                    variants={fadeInUp}
                    className={`bg-gray-50 rounded-lg p-4 sm:p-5 hover:bg-purple-50 transition-all duration-300 ${
                      project.images ? 'lg:col-span-2' : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.images && (
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={{ enabled: true }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="mb-4 sm:mb-6 rounded-lg"
                      >
                        {project.images.map((image, i) => (
                          <SwiperSlide key={i}>
                            <motion.img
                              src={image.src}
                              alt={`${project.title} — ${image.caption}`}
                              className="w-full h-48 sm:h-64 md:h-80 object-contain rounded-lg bg-gray-900"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6 }}
                              loading="lazy"
                            />
                            <p className="text-xs sm:text-sm text-gray-500 italic text-center mt-2 px-2 pb-6">
                              {image.caption}
                            </p>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{project.title}</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2 mb-3 sm:mb-4 leading-relaxed">
                      {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-red-500 to-purple-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
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
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Looking for the Details?</h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 max-w-md sm:max-w-xl mx-auto">
            See the projects I have built alongside this experience, or reach out directly.
          </p>
          <motion.a
            href="#portfolio"
            className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-red-700 transition-all duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
