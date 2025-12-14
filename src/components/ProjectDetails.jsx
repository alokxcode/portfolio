import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive online shopping platform featuring real-time cart management, secure Stripe payment integration, inventory tracking, and a powerful admin dashboard for product and order management. Built with scalability in mind using microservices architecture.',
      fullDescription: `This full-stack e-commerce platform is designed to handle high traffic and provide a seamless shopping experience. 

Key Features:
• Real-time inventory management with automatic stock updates
• Secure payment processing through Stripe API integration
• Advanced product search and filtering with Elasticsearch
• User authentication and authorization with JWT
• Shopping cart persistence across sessions
• Order tracking and management system
• Admin dashboard with analytics and reporting
• Email notifications for orders and shipping updates
• Product recommendations using collaborative filtering
• Mobile-responsive design for all screen sizes

Technical Implementation:
The backend is built with Node.js and Express, using MongoDB for flexible data storage and Redis for caching frequently accessed data. The frontend uses React with Redux for state management, ensuring smooth user interactions. The application follows microservices architecture, with separate services for user management, product catalog, orders, and payments.`,
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      language: 'JavaScript',
      stars: 234,
      forks: 45,
      challenges: 'Implementing real-time inventory sync across multiple services, handling payment failures gracefully, optimizing database queries for large product catalogs.',
      learnings: 'Gained deep understanding of microservices architecture, payment gateway integration, and building scalable e-commerce systems.'
    },
    {
      id: 2,
      title: 'Real-Time Task Management',
      description: 'Collaborative project management tool with WebSocket-powered real-time updates, team workspaces, kanban boards, sprint planning, and time tracking. Features include drag-and-drop interface, notifications, and comprehensive analytics dashboard.',
      fullDescription: `A comprehensive project management solution designed for agile teams working remotely.

Key Features:
• Real-time collaboration with WebSocket technology
• Drag-and-drop kanban boards for task management
• Sprint planning and burndown charts
• Team workspaces with role-based permissions
• Time tracking and productivity analytics
• Task dependencies and milestone tracking
• File attachments and comments on tasks
• Email and in-app notifications
• Calendar integration for deadlines
• Export reports in multiple formats

Technical Implementation:
Built with React and TypeScript for type safety and better developer experience. Socket.io powers the real-time features, allowing instant updates across all connected clients. PostgreSQL handles relational data with optimized queries, and Redis manages real-time session data and caching.`,
      tags: ['React', 'Socket.io', 'PostgreSQL', 'Express'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      language: 'TypeScript',
      stars: 156,
      forks: 32,
      challenges: 'Managing WebSocket connections at scale, handling offline scenarios, implementing optimistic UI updates.',
      learnings: 'Mastered real-time communication patterns, conflict resolution in collaborative editing, and building responsive drag-and-drop interfaces.'
    },
    {
      id: 3,
      title: 'Weather Intelligence Dashboard',
      description: 'Advanced weather forecasting application with interactive maps, hourly and 7-day forecasts, severe weather alerts, air quality index, and historical data visualization. Integrates multiple weather APIs for accurate predictions.',
      fullDescription: `A feature-rich weather dashboard that provides comprehensive meteorological data visualization.

Key Features:
• Interactive weather maps with multiple layers
• Hourly, daily, and weekly forecasts
• Severe weather alerts and notifications
• Air quality index tracking
• Historical weather data and trends
• Location-based automatic updates
• Multiple location management
• UV index and sunrise/sunset times
• Wind speed and direction visualization
• Precipitation probability charts
• Temperature feels-like calculations

Technical Implementation:
The application integrates OpenWeather API for forecast data and Mapbox for interactive mapping. Chart.js provides beautiful data visualizations. The frontend is built with React and uses context API for state management. Weather data is cached locally to reduce API calls and improve performance.`,
      tags: ['React', 'OpenWeather', 'Mapbox', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      language: 'JavaScript',
      stars: 89,
      forks: 21,
      challenges: 'Handling multiple API integrations, optimizing map rendering performance, implementing accurate weather data caching.',
      learnings: 'Learned advanced data visualization techniques, working with geolocation APIs, and creating intuitive weather data displays.'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Full-featured social networking platform inspired by Instagram with image/video posts, stories with 24h expiry, real-time messaging, follow system, explore feed with recommendation algorithm, and AWS S3 for media storage.',
      fullDescription: `A modern social media platform with rich media sharing and real-time interactions.

Key Features:
• Image and video post creation with filters
• Stories feature with 24-hour auto-expiration
• Real-time direct messaging with read receipts
• Follow/unfollow system with suggestions
• Explore page with content recommendations
• Like, comment, and share functionality
• User profiles with bio and statistics
• Hashtag and mention support
• Search users and posts
• Infinite scroll for feeds
• Push notifications for interactions
• Media compression and optimization

Technical Implementation:
Built with Next.js for server-side rendering and optimal performance. PostgreSQL stores user data and relationships, while Redis handles real-time messaging and caching. AWS S3 manages all media uploads with CloudFront CDN for fast delivery. The recommendation algorithm uses collaborative filtering to suggest relevant content.`,
      tags: ['Next.js', 'PostgreSQL', 'AWS S3', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      language: 'TypeScript',
      stars: 312,
      forks: 67,
      challenges: 'Building an efficient recommendation algorithm, handling large media files, implementing real-time features at scale.',
      learnings: 'Gained expertise in cloud storage solutions, building recommendation systems, and creating engaging social media features.'
    }
  ];

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <button onClick={() => navigate('/')} className="back-btn">
          <FaArrowLeft /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="project-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="project-details-container">
        <motion.button
          className="back-btn"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft /> Back to Projects
        </motion.button>

        <motion.div
          className="project-details-header"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1>{project.title}</h1>
          <div className="project-meta">
            <span className="project-language">
              <span className="language-dot" style={{ 
                backgroundColor: project.language === 'TypeScript' ? '#3178c6' : '#f1e05a' 
              }}></span>
              {project.language}
            </span>
            <span className="project-stat">⭐ {project.stars}</span>
            <span className="project-stat">🔱 {project.forks}</span>
          </div>
          <p className="project-short-desc">{project.description}</p>
          <div className="project-actions">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn">
              <FaGithub /> View Code
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn primary">
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          className="project-details-body"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="details-section">
            <h2>Overview</h2>
            <div className="overview-content">
              {project.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="details-section">
            <h2>Technologies Used</h2>
            <div className="tech-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="details-section">
            <h2>Challenges & Solutions</h2>
            <p>{project.challenges}</p>
          </div>

          <div className="details-section">
            <h2>Key Learnings</h2>
            <p>{project.learnings}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
