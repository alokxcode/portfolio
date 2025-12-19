import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const professionalJourney = [
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions Inc',
      duration: 'Jun 2021 - Dec 2022',
      description: 'Built and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver features on schedule. Optimized database queries improving performance by 40%.',
      technologies: ['React', 'Python', 'PostgreSQL', 'FastAPI'],
      type: 'Full-time'
    },
    {
      id: 3,
      role: 'Backend Developer Intern',
      company: 'StartupXYZ',
      duration: 'Jan 2021 - May 2021',
      description: 'Developed RESTful APIs for mobile application. Implemented authentication and authorization using JWT. Wrote comprehensive unit tests achieving 85% code coverage.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Jest'],
      type: 'Internship'
    }
  ];

  const openSourceContributions = [
    {
      id: 1,
      project: 'React Native',
      role: 'Core Contributor',
      duration: '2023 - Present',
      description: 'Contributing to React Native framework. Fixed critical bugs in navigation system, improved TypeScript definitions, and enhanced documentation. Active in community discussions and code reviews.',
      technologies: ['JavaScript', 'TypeScript', 'React Native', 'C++'],
      contributions: '50+ PRs merged'
    }
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="section-header">
          <h2 className="section-title">Real World Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Professional journey and open source contributions</p>
        </div>

        <div className="experience-sections-wrapper">
          {/* Professional Journey */}
          <div className="experience-section">
          <h3 className="subsection-title">Professional Journey</h3>
          <div className="timeline">
            {professionalJourney.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <div className="experience-title-group">
                      <h3 className="experience-role">{exp.role}</h3>
                      <div className="experience-meta">
                        <span className="experience-company">
                          <FaBriefcase className="meta-icon" />
                          {exp.company}
                        </span>
                        <span className="experience-duration">
                          <FaCalendar className="meta-icon" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="experience-actions">
                    <button 
                      className="know-more-btn"
                      onClick={() => navigate(`/experience/${exp.id}`)}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

          {/* Open Source Contributions */}
          <div className="experience-section">
            <h3 className="subsection-title">Open Source Contributions</h3>
            <div className="timeline">
              {openSourceContributions.map((contrib, index) => (
                <motion.div
                  key={contrib.id}
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-marker opensource-marker"></div>
                  <div className="timeline-content">
                    <div className="experience-header">
                      <div className="experience-title-group">
                        <h3 className="experience-role">{contrib.project}</h3>
                        <div className="experience-meta">
                          <span className="experience-company">
                            <FaBriefcase className="meta-icon" />
                            {contrib.role}
                          </span>
                          <span className="experience-duration">
                            <FaCalendar className="meta-icon" />
                            {contrib.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="experience-description">{contrib.description}</p>
                    
                    <div className="experience-actions">
                      <button 
                        className="know-more-btn"
                        onClick={() => navigate(`/experience/${contrib.id}`)}
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
