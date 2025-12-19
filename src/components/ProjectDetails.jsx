import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaBook } from 'react-icons/fa';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive online shopping platform featuring real-time cart management, secure Stripe payment integration, inventory tracking, and a powerful admin dashboard for product and order management. Built with scalability in mind using microservices architecture.',
      whatItDoes: 'This full-stack e-commerce platform provides a complete online shopping experience with real-time inventory management, secure payment processing through Stripe, advanced product search with Elasticsearch, user authentication, shopping cart persistence, order tracking, admin dashboard with analytics, email notifications, and product recommendations. The backend is built with Node.js and Express, using MongoDB for data storage and Redis for caching. The frontend uses React with Redux for state management, following a microservices architecture.',
      whyIBuilt: 'I built this project to understand the complexities of building a scalable e-commerce system and to gain hands-on experience with microservices architecture, payment gateway integration, and real-time data synchronization. I wanted to create a production-ready application that could handle high traffic while maintaining data consistency across multiple services.',
      challenges: 'The main challenges were implementing real-time inventory synchronization across multiple microservices to prevent overselling, handling payment failures gracefully with proper retry mechanisms and error handling, optimizing database queries for large product catalogs to maintain fast response times, and ensuring data consistency between services.',
      solutions: 'I solved the inventory sync issue by implementing an event-driven architecture using message queues to propagate inventory changes across services. For payment failures, I created a robust error handling system with retry logic and fallback mechanisms. Database performance was improved by implementing proper indexing, query optimization, and caching strategies with Redis. I ensured data consistency using distributed transactions and eventual consistency patterns where appropriate.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      docs: 'https://docs.com',
      language: 'JavaScript',
      stars: 234,
      forks: 45
    },
    {
      id: 2,
      title: 'Real-Time Task Management',
      description: 'Collaborative project management tool with WebSocket-powered real-time updates, team workspaces, kanban boards, sprint planning, and time tracking. Features include drag-and-drop interface, notifications, and comprehensive analytics dashboard.',
      whatItDoes: 'This collaborative project management tool enables agile teams to work together remotely with real-time updates powered by WebSocket technology. It features drag-and-drop kanban boards, sprint planning with burndown charts, team workspaces with role-based permissions, time tracking, task dependencies, file attachments, email and in-app notifications, and calendar integration. Built with React and TypeScript, it uses Socket.io for real-time features, PostgreSQL for data storage, and Redis for session management.',
      whyIBuilt: 'I created this project to address the challenges remote teams face in collaborating effectively. I wanted to build a solution that provides instant updates across all team members without page refreshes, making project management more seamless and intuitive. This project allowed me to explore real-time communication patterns and understand how to build truly collaborative applications.',
      challenges: 'The major challenges included managing WebSocket connections at scale to handle multiple simultaneous users, implementing proper handling of offline scenarios where users might lose connectivity temporarily, ensuring optimistic UI updates work correctly and sync when the connection is restored, and preventing race conditions in collaborative editing scenarios.',
      solutions: 'I implemented a connection pooling strategy to manage WebSocket connections efficiently and added automatic reconnection logic with exponential backoff. For offline scenarios, I created a local queue system that stores actions and syncs them when connectivity is restored. Optimistic UI updates were handled with a rollback mechanism for failed operations. I also implemented operational transformation techniques to resolve conflicts in collaborative editing.',
      tags: ['React', 'Socket.io', 'PostgreSQL', 'Express'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      docs: 'https://docs.com',
      language: 'TypeScript',
      stars: 156,
      forks: 32
    },
    {
      id: 3,
      title: 'Weather Intelligence Dashboard',
      description: 'Advanced weather forecasting application with interactive maps, hourly and 7-day forecasts, severe weather alerts, air quality index, and historical data visualization. Integrates multiple weather APIs for accurate predictions.',
      whatItDoes: 'This weather intelligence dashboard provides comprehensive meteorological data visualization with interactive weather maps featuring multiple layers, hourly/daily/weekly forecasts, severe weather alerts, air quality index tracking, historical weather trends, location-based automatic updates, UV index monitoring, and detailed wind and precipitation visualizations. The application integrates OpenWeather API for forecast data and Mapbox for interactive mapping, with Chart.js providing beautiful data visualizations.',
      whyIBuilt: 'I built this project to create a more intuitive and comprehensive weather application than existing solutions. I wanted to combine multiple data sources into a single, beautiful interface that makes complex meteorological data easy to understand for everyone. This project also gave me an opportunity to work with geospatial data and advanced data visualization techniques.',
      challenges: 'The main challenges were integrating multiple weather APIs with different data formats and ensuring they work together seamlessly, optimizing the performance of interactive map rendering with multiple layers without causing lag or excessive memory usage, and implementing an intelligent caching strategy that balances API rate limits with data freshness.',
      solutions: 'I created a unified data adapter layer that normalizes data from different APIs into a consistent format, making it easier to work with. For map performance, I implemented lazy loading of map layers, tile caching, and WebGL rendering for smooth interactions. The caching strategy uses a combination of time-based invalidation and conditional requests to the APIs, storing data in IndexedDB for offline access while respecting API quotas.',
      tags: ['React', 'OpenWeather', 'Mapbox', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      docs: 'https://docs.com',
      language: 'JavaScript',
      stars: 89,
      forks: 21
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
          </div>
          <p className="project-short-desc">{project.description}</p>
          <div className="project-actions">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn">
              <FaGithub /> View Code
            </a>
            <a href={project.docs} target="_blank" rel="noopener noreferrer" className="action-btn">
              <FaBook /> Docs
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
            <h2>What This Project Does</h2>
            <p>{project.whatItDoes}</p>
          </div>

          <div className="details-section">
            <h2>Why I Built This</h2>
            <p>{project.whyIBuilt}</p>
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
            <h2>Challenges I Faced</h2>
            <p>{project.challenges}</p>
          </div>

          <div className="details-section">
            <h2>How I Solved Them</h2>
            <p>{project.solutions}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
