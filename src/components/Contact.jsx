import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'your@email.com', link: 'mailto:your@email.com' },
    { icon: FaPhone, label: 'Phone', value: '+1 (123) 456-7890', link: 'tel:+11234567890' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'San Francisco, CA', link: null }
  ];

  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', link: 'https://github.com' },
    { icon: FaLinkedin, label: 'LinkedIn', link: 'https://linkedin.com' },
    { icon: FaTwitter, label: 'Twitter', link: 'https://twitter.com' }
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>

        <div className="contact-content">
          <motion.div className="contact-info-section" variants={itemVariants}>
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-description">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  className="contact-detail"
                  whileHover={{ x: 10 }}
                >
                  <div className="detail-icon">
                    <info.icon />
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="detail-value">{info.value}</a>
                    ) : (
                      <span className="detail-value">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact-socials">
              <h4 className="socials-title">Follow Me</h4>
              <div className="socials-links">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can I help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message here..."
              />
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>

            {formStatus === 'success' && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
