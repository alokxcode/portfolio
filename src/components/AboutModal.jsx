import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import './AboutModal.css';

const AboutModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <div className="modal-wrapper">
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
            {/* Close Button */}
            <button className="modal-close" onClick={onClose}>
              <IoClose />
            </button>

            {/* Modal Header */}
            <div className="modal-header">
              <h2>About Me</h2>
              <div className="modal-divider" />
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <div className="about-intro">
                <h3>Hey, I'm Alok Kumar</h3>
                <p>
                  A passionate Backend Developer specializing in building scalable,
                  high-performance server-side applications. I love solving complex
                  problems and creating efficient solutions.
                </p>
              </div>

              <div className="about-details">
                <div className="detail-item">
                  <h4>Experience</h4>
                  <p>3+ years in backend development</p>
                </div>
                
                <div className="detail-item">
                  <h4>Specialization</h4>
                  <p>RESTful APIs, Microservices, Database Design</p>
                </div>
                
                <div className="detail-item">
                  <h4>Tech Stack</h4>
                  <p>Node.js, Python, PostgreSQL, MongoDB, Redis</p>
                </div>
                
                <div className="detail-item">
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>

              <div className="about-philosophy">
                <h4>Development Philosophy</h4>
                <p>
                  "Clean code is not written by following a set of rules. 
                  You don't become a software craftsman by learning a list of what to do and what not to do. 
                  Professionalism and craftsmanship come from discipline and dedication."
                </p>
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;
