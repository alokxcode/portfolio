import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-brand">
            <h3 className="footer-logo">&lt;/Dev&gt;</h3>
            <p className="footer-tagline">Building digital experiences, one line at a time.</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <div className="footer-nav">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Connect</h4>
              <div className="footer-socials">
                {[
                  { icon: FaGithub, link: 'https://github.com' },
                  { icon: FaLinkedin, link: 'https://linkedin.com' },
                  { icon: FaTwitter, link: 'https://twitter.com' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="footer-copyright">
            © {currentYear} Your Name. Made with <FaHeart className="heart-icon" /> using React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
