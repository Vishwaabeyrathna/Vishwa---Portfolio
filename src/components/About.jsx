import { motion } from 'framer-motion';

function About() {
  const softSkills = ['Leadership', 'Creativity', 'Problem-Solving', 'Time Management', 'Presentation Skills', 'Team Collaboration', 'Adaptability'];
  const techSkills = [
    { name: 'Java', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Kotlin', level: 65 },
    { name: 'React', level: 80 },
    { name: 'CSS', level: 90 },
    { name: 'SQL', level: 75 },
    { name: 'HTML', level: 95 },
    { name: 'PHP', level: 70 },
    { name: 'C', level: 70 },
    { name: 'R', level: 60 },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-r from-gray-100 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Decorative Shape */}
      <motion.div
        className="absolute top-1/4 left-0 w-1/4 h-1/2 bg-gradient-to-b from-red-500 to-purple-600 opacity-30 rounded-r-full"
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
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I'm Vishwa Abeyrathna, a dedicated IT student with a passion for technology and innovation. My strengths include leadership, creativity, and problem-solving, which I combine with strong technical skills to build impactful solutions. I thrive in collaborative environments and am committed to continuous learning and professional growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white bg-opacity-90 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Education</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li className="text-lg">BSc (Hons) in Information Technology, SLIIT Malabe (Expected Graduation: 2027)</li>
            <li className="text-lg">GCE Advanced Level, Bioscience Stream, Kegalu Vidyalaya (2021)</li>
            <li className="text-lg">GCE Ordinary Level, Kegalu Vidyalaya (2016)</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white bg-opacity-90 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                className="flex items-center space-x-3 p-2 bg-gray-50 rounded-md hover:bg-purple-50 transition duration-300"
              >
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                <span className="text-gray-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="bg-white bg-opacity-90 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: index * 0.1 + 1.1, duration: 0.7 }}
                className="relative"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm md:text-base text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-sm md:text-base text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.7, delay: index * 0.1 + 1.1 }}
                    className="bg-gradient-to-r from-red-500 to-purple-600 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;