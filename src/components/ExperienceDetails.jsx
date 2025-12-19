import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaArrowLeft } from 'react-icons/fa';
import './ExperienceDetails.css';

const ExperienceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const experiences = [
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions Inc',
      duration: 'Jun 2021 - Dec 2022',
      type: 'Full-time',
      location: 'San Francisco, CA',
      shortDescription: 'Built and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver features on schedule. Optimized database queries improving performance by 40%.',
      whatIDid: 'Led the development of enterprise-level web applications serving over 100,000 users. Architected and implemented scalable microservices using React, Python, and PostgreSQL. Worked closely with product managers and designers to translate business requirements into technical solutions. Mentored junior developers and conducted code reviews to maintain high code quality standards.',
      myResponsibilities: 'Designed and developed RESTful APIs and GraphQL endpoints. Implemented comprehensive unit and integration tests to ensure code reliability. Optimized database queries and implemented caching strategies, resulting in 40% performance improvement. Collaborated with DevOps team to set up CI/CD pipelines. Participated in agile ceremonies including sprint planning, daily standups, and retrospectives. Documented technical specifications and API documentation.',
      challenges: 'The main challenge was dealing with legacy codebase that had technical debt accumulated over years. The application had performance issues with slow database queries and poor frontend rendering. Additionally, the testing coverage was minimal, making it risky to make changes.',
      solutions: 'I systematically refactored critical parts of the codebase by first adding comprehensive test coverage. Implemented database indexing and query optimization techniques. Introduced React.memo and useMemo for frontend optimization. Set up monitoring tools to track performance metrics. Created a technical debt backlog and worked with the team to address issues incrementally.',
      technologies: ['React', 'Python', 'PostgreSQL', 'FastAPI', 'Redis', 'Docker', 'AWS', 'Jest', 'GraphQL'],
      achievements: [
        'Reduced API response time by 40% through database optimization',
        'Implemented CI/CD pipeline reducing deployment time from hours to minutes',
        'Mentored 3 junior developers helping them grow their technical skills',
        'Led migration from monolith to microservices architecture'
      ]
    },
    {
      id: 3,
      role: 'Backend Developer Intern',
      company: 'StartupXYZ',
      duration: 'Jan 2021 - May 2021',
      type: 'Internship',
      location: 'Remote',
      shortDescription: 'Developed RESTful APIs for mobile application. Implemented authentication and authorization using JWT. Wrote comprehensive unit tests achieving 85% code coverage.',
      whatIDid: 'Contributed to the development of a mobile-first social networking platform. Built robust RESTful APIs using Node.js and Express. Implemented secure authentication and authorization mechanisms. Designed database schemas and wrote efficient database queries. Participated in code reviews and learned best practices from senior developers.',
      myResponsibilities: 'Developed and maintained RESTful API endpoints for mobile applications. Implemented JWT-based authentication and role-based access control. Created comprehensive unit and integration tests achieving 85% code coverage. Optimized API performance and reduced response times. Collaborated with mobile developers to ensure smooth integration. Participated in sprint planning and daily standups. Documented API endpoints using Swagger/OpenAPI.',
      challenges: 'Being new to professional development, I faced challenges understanding the existing codebase and following best practices. The project had tight deadlines, and I needed to learn new technologies quickly. Ensuring proper security in authentication was also critical and challenging.',
      solutions: 'I dedicated extra time to study the codebase and ask questions during code reviews. Created a personal learning plan to master Node.js and Express fundamentals. Researched and implemented industry-standard security practices for JWT authentication. Used pair programming sessions with senior developers to accelerate my learning. Set up a test-driven development workflow to ensure code quality.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Jest', 'JWT', 'Swagger', 'Git'],
      achievements: [
        'Achieved 85% code coverage with comprehensive unit tests',
        'Implemented secure JWT authentication system handling 10,000+ daily requests',
        'Reduced API response time by 25% through query optimization',
        'Received positive feedback from mentors for code quality and learning attitude'
      ]
    },
    {
      id: 1,
      role: 'Core Contributor',
      company: 'React Native',
      duration: '2023 - Present',
      type: 'Open Source',
      location: 'Remote',
      shortDescription: 'Contributing to React Native framework. Fixed critical bugs in navigation system, improved TypeScript definitions, and enhanced documentation. Active in community discussions and code reviews.',
      whatIDid: 'Actively contribute to the React Native open source project by fixing bugs, improving documentation, and participating in architectural discussions. Review pull requests from other contributors and provide constructive feedback. Help maintain TypeScript definitions to improve developer experience. Engage with the community through GitHub discussions and Discord channels.',
      myResponsibilities: 'Identify and fix critical bugs in the React Native framework, particularly in the navigation and gesture handling systems. Improve and maintain TypeScript definitions to provide better type safety. Review and test pull requests from community members. Write and update documentation to help developers understand React Native features. Participate in RFC (Request for Comments) discussions for new features. Help triage issues and provide solutions to community members.',
      challenges: 'Understanding the massive React Native codebase which includes JavaScript, TypeScript, Objective-C, Java, and C++ code. Ensuring changes are backward compatible and don\'t break existing applications. Coordinating with multiple maintainers across different time zones. Writing changes that meet the high quality standards of the project.',
      solutions: 'Started by fixing small bugs to understand the codebase structure gradually. Read through existing RFCs and documentation to understand architectural decisions. Set up a comprehensive testing environment to validate changes across iOS and Android. Collaborated closely with maintainers through detailed PR descriptions and discussions. Contributed to documentation improvements alongside code changes.',
      technologies: ['JavaScript', 'TypeScript', 'React Native', 'C++', 'Objective-C', 'Java', 'Gradle', 'CocoaPods'],
      achievements: [
        '50+ pull requests merged into the main repository',
        'Fixed critical navigation bug affecting thousands of apps',
        'Improved TypeScript definitions reducing type errors by 30%',
        'Recognized as active contributor by React Native core team'
      ]
    }
  ];

  const experience = experiences.find(exp => exp.id === parseInt(id));

  if (!experience) {
    return (
      <motion.div
        className="experience-details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="experience-not-found">
          <h2>Experience not found</h2>
          <button className="back-btn" onClick={() => navigate('/')}>
            <FaArrowLeft /> Back to Home
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="experience-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="experience-details-container">
        <button className="back-btn" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to Home
        </button>

        <motion.div
          className="experience-details-header"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="experience-type-badge">{experience.type}</div>
          <h1>{experience.role}</h1>
          <div className="experience-meta">
            <span className="experience-company">
              <FaBriefcase />
              {experience.company}
            </span>
            <span className="experience-duration">
              <FaCalendar />
              {experience.duration}
            </span>
            {experience.location && (
              <span className="experience-location">
                📍 {experience.location}
              </span>
            )}
          </div>
          <p className="experience-short-desc">{experience.shortDescription}</p>
        </motion.div>

        <motion.div
          className="experience-details-body"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="details-section">
            <h2>What I Did</h2>
            <p>{experience.whatIDid}</p>
          </div>

          <div className="details-section">
            <h2>My Responsibilities</h2>
            <p>{experience.myResponsibilities}</p>
          </div>

          <div className="details-section">
            <h2>Technologies Used</h2>
            <div className="tech-tags">
              {experience.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="details-section">
            <h2>Challenges I Faced</h2>
            <p>{experience.challenges}</p>
          </div>

          <div className="details-section">
            <h2>How I Solved Them</h2>
            <p>{experience.solutions}</p>
          </div>

          <div className="details-section">
            <h2>Key Achievements</h2>
            <ul className="achievements-list">
              {experience.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceDetails;
