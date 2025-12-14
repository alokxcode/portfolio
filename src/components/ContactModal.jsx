import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="contact-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <div className="contact-modal-wrapper">
            <motion.div
              className="contact-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
            {/* Close Button */}
            <button className="contact-modal-close" onClick={onClose}>
              <IoClose />
            </button>

            {/* Modal Header */}
            <div className="contact-modal-header">
              <h2>Get In Touch</h2>
              <div className="contact-modal-divider" />
              <p>Let's work together on your next project</p>
            </div>

            {/* Modal Body */}
            <div className="contact-modal-body">
              <div className="contact-grid">
                {/* Contact Form */}
                <div className="contact-form-section">
                  <h3>Send a Message</h3>
                  <form className="contact-form">
                    <div className="form-group">
                      <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                      <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="contact-info-section">
                  <h3>Contact Information</h3>
                  
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-details">
                      <h4>Email</h4>
                      <p>alok.kumar@example.com</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-details">
                      <h4>Phone</h4>
                      <p>+91 XXXXX XXXXX</p>
                    </div>
                  </div>

                  <div className="social-links">
                    <h4>Follow Me</h4>
                    <div className="social-icons">
                      <a href="#" className="social-icon">
                        <FaLinkedin />
                      </a>
                      <a href="#" className="social-icon">
                        <FaGithub />
                      </a>
                      <a href="#" className="social-icon">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
