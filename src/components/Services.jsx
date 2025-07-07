import { motion } from 'framer-motion';

function Services() {
  const services = [
    'Building full-stack web applications using MERN stack (MongoDB, Express.js, React, Node.js).',
    'Developing Android applications with Kotlin and Android Studio.',
    'Creating dynamic websites with HTML, CSS, JavaScript, and PHP.',
    'Designing database-driven applications with MySQL and Java.',
    'Collaborating in team settings with strong leadership and problem-solving skills.',
  ];

  return (
    <section id="services" className="min-h-screen bg-gradient-to-r from-gray-100 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Decorative Shape */}
      <motion.div
        className="absolute top-1/3 left-0 w-1/4 h-1/2 bg-gradient-to-b from-red-500 to-purple-600 opacity-30 rounded-r-full"
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8"
        >
          My <span className="text-red-600">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          As an aspiring IT professional, I am eager to contribute my skills to internship or entry-level roles in software development, web development, and mobile app development. My expertise includes:
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white bg-opacity-90 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg mb-10"
        >
          <ul className="list-disc list-inside text-left text-gray-700 space-y-4">
            {services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                className="text-lg md:text-xl hover:bg-purple-50 p-2 rounded-md transition duration-300"
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          I am passionate about leveraging my technical and soft skills to deliver innovative solutions and grow as a professional in the tech industry.
        </motion.p>
      </div>
    </section>
  );
}

export default Services;