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
                I am a Computer Science student focused on learning networking fundamentals and Linux systems.

                I enjoy understanding how computers communicate over networks and have hands-on experience with TCP/IP basics, Linux command-line tools, and simple lab setups.

                Currently, I'm strengthening my knowledge of networking protocols, operating systems, and scripting, with the goal of moving into an entry-level networking or system role.

                I prefer learning by building, experimenting, and documenting what I learn.
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
