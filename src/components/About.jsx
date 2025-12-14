import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
      transition: { duration: 0.6 }
    }
  };

  const skills = [
    { icon: FaCode, title: 'Clean Code', description: 'Writing maintainable, scalable, and efficient code' },
    { icon: FaRocket, title: 'Fast Performance', description: 'Optimizing for speed and user experience' },
    { icon: FaLightbulb, title: 'Problem Solving', description: 'Creative solutions to complex challenges' }
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-paragraph">
              I'm a passionate <span className="highlight">Full Stack Developer</span> with a love for
              creating innovative web solutions. With several years of experience in the field,
              I specialize in building modern, responsive applications that solve real-world problems.
            </p>
            <p className="about-paragraph">
              My journey in web development started with curiosity and has evolved into a career
              where I continuously learn and adapt to new technologies. I believe in writing clean,
              maintainable code and creating exceptional user experiences.
            </p>
            <p className="about-paragraph">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="stats">
              <motion.div
                className="stat-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Projects Completed</p>
              </motion.div>
              <motion.div
                className="stat-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="stat-number">5+</h3>
                <p className="stat-label">Years Experience</p>
              </motion.div>
              <motion.div
                className="stat-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="stat-number">100+</h3>
                <p className="stat-label">Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="about-features" variants={itemVariants}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
              >
                <div className="feature-icon">
                  <skill.icon />
                </div>
                <h3 className="feature-title">{skill.title}</h3>
                <p className="feature-description">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
