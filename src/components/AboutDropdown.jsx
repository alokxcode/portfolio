import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import './AboutDropdown.css';

const AboutDropdown = ({ isOpen, onClose, onContactClick }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          className="about-dropdown"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className="dropdown-content">
            <div className="dropdown-header">
              <h3>Who Am I</h3>
            </div>

            <div className="about-intro">
              <h2 className="intro-greeting">Hey I'm Manavya.</h2>
            </div>

            <div className="about-paragraph">
              <p>
                A passionate Backend Developer with 3+ years of experience building scalable, 
                high-performance server-side applications. I specialize in RESTful APIs and 
                microservices architecture, working primarily with Node.js, Python, and PostgreSQL. 
                I love solving complex problems and turning ideas into efficient, maintainable code. 
                Based in India, I'm always exploring new technologies and best practices to enhance 
                my craft.
              </p>
            </div>

            <motion.button
              className="contact-btn"
              onClick={(e) => {
                e.stopPropagation();
                onContactClick();
                onClose();
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope /> Get in Touch
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutDropdown;
