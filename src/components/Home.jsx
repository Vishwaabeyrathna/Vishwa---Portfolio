import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpg';

function Home() {
  return (
    <section id="home" className="min-h-screen bg-gradient-violet flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.img
          src={profileImage}
          alt="Vishwa Abeyrathna"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-glass"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Vishwa Abeyrathna</h1>
        <motion.p
          className="text-xl text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Aspiring IT Professional | Dedicated Innovator
        </motion.p>
        <p className="text-lg text-gray-text">
          I'm a Bachelor of Information Technology student at SLIIT Malabe, passionate about creating innovative solutions through coding, problem-solving, and teamwork. Eager to contribute my skills to the tech industry.
        </p>
      </motion.div>
    </section>
  );
}

export default Home;