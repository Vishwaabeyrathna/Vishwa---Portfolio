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
    <section id="services" className="py-20 bg-dark-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-violet-primary mb-6 text-center"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-text mb-6"
        >
          As an aspiring IT professional, I am eager to contribute my skills to internship or entry-level roles in software development, web development, and mobile app development. My expertise includes:
        </motion.p>
        <ul className="list-disc list-inside text-gray-text mb-6">
          {services.map((service, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {service}
            </motion.li>
          ))}
        </ul>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg text-gray-text"
        >
          I am passionate about leveraging my technical and soft skills to deliver innovative solutions and grow as a professional in the tech industry.
        </motion.p>
      </div>
    </section>
  );
}

export default Services;