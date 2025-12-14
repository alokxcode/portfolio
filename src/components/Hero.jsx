import { motion } from 'framer-motion';
import profileImg from '../assets/alokxprofile.png';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image with Decoration */}
        <motion.div
          className="profile-wrapper"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="profile-decoration"></div>
          <motion.div
            className="profile-image-container"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={profileImg} alt="Manavya" className="profile-image" />
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Alok Kumar
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Backend Developer
        </motion.h2>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          onClick={scrollToProjects}
        >
          <motion.div
            className="scroll-icon"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            ⌄
          </motion.div>
          <span className="scroll-text">See My Work</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
