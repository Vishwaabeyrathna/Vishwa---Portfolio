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
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-violet-primary mb-6 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-text mb-6"
        >
          I'm Vishwa Abeyrathna, a dedicated IT student with a passion for technology and innovation. My strengths include leadership, creativity, and problem-solving, which I combine with strong technical skills to build impactful solutions. I thrive in collaborative environments and am committed to continuous learning and professional growth.
        </motion.p>

        <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
        <ul className="list-disc list-inside text-gray-text mb-6">
          <li>BSc (Hons) in Information Technology, SLIIT Malabe (Expected Graduation: 2026)</li>
          <li>GCE Advanced Level, Bioscience Stream, Kegalu Vidyalaya (2021)</li>
          <li>GCE Ordinary Level, Kegalu Vidyalaya (2016)</li>
        </ul>

        <h3 className="text-2xl font-semibold text-white mb-4">Soft Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex items-center space-x-2"
            >
              <svg className="w-5 h-5 text-violet-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span className="text-gray-text">{skill}</span>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-white mb-4">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pt-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-text">{skill.name}</span>
              </div>
              <div className="w-full bg-dark-bg rounded-full h-2">
                <div
                  className="bg-violet-primary h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;