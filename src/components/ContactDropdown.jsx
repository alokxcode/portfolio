import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';
import './ContactDropdown.css';

const ContactDropdown = ({ isOpen, onClose }) => {
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

  const contactLinks = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'alokxmail@gmail.com',
      link: 'mailto:alokxmail@gmail.com'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'alok-18zx',
      link: 'https://linkedin.com/in/alok-18zx'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'alokxcode',
      link: 'https://github.com/alokxcode'
    },
    {
      icon: <FaDiscord />,
      label: 'Discord',
      value: 'manavya_',
      link: 'https://discord.com/users/manavya_'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          className="contact-dropdown"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className="dropdown-content">
            <div className="dropdown-header">
              <h3>Get in Touch</h3>
            </div>

            <div className="contact-links">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-info">
                    <div className="contact-label">{contact.label}</div>
                    <div className="contact-value">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactDropdown;
