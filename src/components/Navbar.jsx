import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import DiscordStatus from './DiscordStatus';

const Navbar = ({ theme, toggleTheme, onAboutClick, onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="nav-container">
        <motion.button
          className="nav-btn"
          onClick={onAboutClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About Me
        </motion.button>

        <DiscordStatus userId="1381138523113000970" />

        <motion.button
          className="nav-btn"
          onClick={onContactClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
