import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpg';

function Home() {
  // Function to handle CV download with enhanced debugging
  const handleDownloadCV = async () => {
    const cvUrl = '/cv.pdf'; // Path to your PDF file in the public folder
    try {
      const response = await fetch(cvUrl, { cache: 'no-store' }); // Prevent caching
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const contentLength = response.headers.get('content-length'); // Check file size
      console.log('Server reported content length:', contentLength);
      const blob = await response.blob();
      console.log('Downloaded blob size:', blob.size); // Log actual downloaded size
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Vishwa_Abeyrathna_CV.pdf'; // Custom filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
      console.log('Download completed for:', cvUrl);
    } catch (error) {
      console.error('Download failed:', error.message);
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-r from-gray-100 to-white flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Decorative Shape */}
      <motion.div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/3 h-3/4 bg-gradient-to-t from-red-500 to-purple-600 opacity-50 rounded-l-full"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Profile Image */}
        <motion.img
          src={profileImage}
          alt="Vishwa Abeyrathna"
          className="w-[200px] h-[200px] rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        />

        {/* Name and Greeting */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-2 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hy! I Am <span className="text-red-600">Vishwa Abeyrathna</span>
        </motion.h1>

        {/* Title and Description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-md mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          SLIIT Undergraduate | Full Stack Developer
        </motion.p>

        {/* Stats and Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-8 space-y-4 md:space-y-0 md:space-x-6">
          <motion.button
            onClick={handleDownloadCV} // Trigger download function
            className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My CV
          </motion.button>
          <motion.button
            className="bg-white text-purple-600 px-8 py-3 rounded-lg border border-purple-600 hover:bg-purple-50 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know More
          </motion.button>
        </div>

        {/* Specialization */}
        <motion.p
          className="text-gray-500 text-base mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          BSc (Hons) in Information Technology Specialized In 
          Information Technology.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Home;