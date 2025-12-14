import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive online shopping platform featuring real-time cart management, secure Stripe payment integration, inventory tracking, and a powerful admin dashboard for product and order management. Built with scalability in mind using microservices architecture.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      language: 'JavaScript',
      stars: 234,
      forks: 45
    },
    {
      id: 2,
      title: 'Real-Time Task Management',
      description: 'Collaborative project management tool with WebSocket-powered real-time updates, team workspaces, kanban boards, sprint planning, and time tracking. Features include drag-and-drop interface, notifications, and comprehensive analytics dashboard.',
      tags: ['React', 'Socket.io', 'PostgreSQL', 'Express'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      language: 'TypeScript',
      stars: 156,
      forks: 32
    },
    {
      id: 3,
      title: 'Weather Intelligence Dashboard',
      description: 'Advanced weather forecasting application with interactive maps, hourly and 7-day forecasts, severe weather alerts, air quality index, and historical data visualization. Integrates multiple weather APIs for accurate predictions.',
      tags: ['React', 'OpenWeather', 'Mapbox', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      language: 'JavaScript',
      stars: 89,
      forks: 21
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Full-featured social networking platform inspired by Instagram with image/video posts, stories with 24h expiry, real-time messaging, follow system, explore feed with recommendation algorithm, and AWS S3 for media storage.',
      tags: ['Next.js', 'PostgreSQL', 'AWS S3', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      language: 'TypeScript',
      stars: 312,
      forks: 67
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">A collection of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/project/${project.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-language">
                      <span className="language-dot" style={{ 
                        backgroundColor: project.language === 'TypeScript' ? '#3178c6' : '#f1e05a' 
                      }}></span>
                      {project.language}
                    </span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="see-more-container"
          variants={cardVariants}
        >
          <motion.a
            href="https://github.com/alokxcode"
            target="_blank"
            rel="noopener noreferrer"
            className="see-more-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See More Projects on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
