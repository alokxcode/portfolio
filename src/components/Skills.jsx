import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaDatabase,
  FaHtml5, FaCss3Alt, FaJs, FaAws, FaFigma, FaJava, FaLinux, FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiTailwindcss,
  SiNextdotjs, SiExpress, SiGraphql, SiFirebase, SiCplusplus,
  SiTensorflow, SiPytorch, SiOpenai, SiPostman, SiGo, SiC
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showOpenSource, setShowOpenSource] = useState(false);

  const languages = [
    { name: 'Go', icon: SiGo, tag: 'Mastered', tagColor: '#00ADD8' },
    { name: 'Python', icon: FaPython, tag: 'Proficient', tagColor: '#3776AB' },
    { name: 'JavaScript', icon: FaJs, tag: 'Proficient', tagColor: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, tag: 'Familiar', tagColor: '#3178C6' },
    { name: 'C', icon: SiC, tag: 'Familiar', tagColor: '#A8B9CC' }
  ];

  const tools = [
    { name: 'Git', icon: FaGitAlt },
    { name: 'Docker', icon: FaDocker },
    { name: 'Linux', icon: FaLinux },
    { name: 'AWS', icon: FaAws },
    { name: 'Postman', icon: SiPostman }
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      color: '#61dafb',
      skills: [
        { name: 'React', primaryProjects: 5, supportingProjects: 2 },
        { name: 'TailwindCSS', primaryProjects: 4, supportingProjects: 1 }
      ]
    },
    {
      title: 'Agentic AI',
      color: '#ff6b6b',
      skills: [
        { name: 'LangChain', primaryProjects: 4, supportingProjects: 2 },
        { name: 'LangGraph', primaryProjects: 3, supportingProjects: 1 }
      ]
    },
    {
      title: 'Backend',
      color: '#68a063',
      skills: [
        { name: 'Node.js', primaryProjects: 5, supportingProjects: 2 },
        { name: 'Express', primaryProjects: 4, supportingProjects: 1 },
        { name: 'FastAPI', primaryProjects: 3, supportingProjects: 1 }
      ]
    },
    {
      title: 'AI/ML',
      color: '#ff9500',
      skills: [
        { name: 'Data Analysis', primaryProjects: 4, supportingProjects: 2 }
      ]
    },
    {
      title: 'Databases',
      color: '#4db33d',
      skills: [
        { name: 'MongoDB', primaryProjects: 5, supportingProjects: 1 },
        { name: 'PostgreSQL', primaryProjects: 3, supportingProjects: 2 },
        { name: 'MySQL', primaryProjects: 1, supportingProjects: 2 },
        { name: 'Firebase', primaryProjects: 4, supportingProjects: 1 }
      ]
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="section-header">
          <h2 className="section-title">Technical Snapshot</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">My technical expertise and tools I work with</p>
        </div>

        {/* Languages Section */}
        <motion.div className="languages-section" variants={itemVariants}>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                className="language-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <lang.icon className="language-icon" />
                <span className="language-name">{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Categories - Pinterest Style */}
        <div className="skills-masonry">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              style={{ '--accent-color': category.color }}
            >
              <div className="skill-card-header">
                <h3 className="skill-card-title">{category.title}</h3>
                <div className="skill-card-accent" style={{ backgroundColor: category.color }}></div>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-tags-container">
                      <span className="skill-usage-tag skill-primary-tag">
                        Primary use - {skill.primaryProjects} {skill.primaryProjects === 1 ? 'Project' : 'Projects'}
                      </span>
                      <span className="skill-usage-tag skill-supporting-tag">
                        Supporting use - {skill.supportingProjects} {skill.supportingProjects === 1 ? 'Project' : 'Projects'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div className="languages-section" variants={itemVariants}>
          <div className="languages-grid">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="language-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <tool.icon className="language-icon" />
                <span className="language-name">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Non-Tech Open Source Contributions Section */}
        <motion.div className="opensource-section" variants={itemVariants}>
          <button 
            className="opensource-toggle-btn"
            onClick={() => setShowOpenSource(!showOpenSource)}
          >
            Non-Tech Open Source Contributions
            <span className={`toggle-icon ${showOpenSource ? 'open' : ''}`}>▼</span>
          </button>
          
          {showOpenSource && (
            <motion.div 
              className="opensource-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="opensource-project">
                <h3 className="project-name">Open Neuromorphic</h3>
                <p className="opensource-description">
                  Contributing to the Open Neuromorphic community through non-technical initiatives 
                  to help advance neuromorphic computing research and accessibility.
                </p>
              </div>
              
              <div className="contribution-cards">
                <motion.div className="contribution-card" whileHover={{ y: -5 }}>
                  <h3>Documentation</h3>
                  <p>Writing and improving project documentation, tutorials, and guides to help researchers and developers get started with neuromorphic computing.</p>
                </motion.div>
                
                <motion.div className="contribution-card" whileHover={{ y: -5 }}>
                  <h3>Community Support</h3>
                  <p>Actively helping community members with troubleshooting, answering questions, and providing guidance on neuromorphic hardware and software.</p>
                </motion.div>
                
                <motion.div className="contribution-card" whileHover={{ y: -5 }}>
                  <h3>Graphic Designing</h3>
                  <p>Creating visual assets, diagrams, and design materials to make complex neuromorphic concepts more accessible and engaging.</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
