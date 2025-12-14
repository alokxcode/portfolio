import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaDatabase,
  FaHtml5, FaCss3Alt, FaJs, FaAws, FaFigma
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiTailwindcss,
  SiNextdotjs, SiExpress, SiGraphql, SiFirebase
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 95 },
        { name: 'TypeScript', icon: SiTypescript, level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, level: 85 },
        { name: 'TailwindCSS', icon: SiTailwindcss, level: 90 },
        { name: 'HTML5', icon: FaHtml5, level: 95 },
        { name: 'CSS3', icon: FaCss3Alt, level: 90 },
        { name: 'JavaScript', icon: FaJs, level: 95 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 90 },
        { name: 'Express', icon: SiExpress, level: 85 },
        { name: 'Python', icon: FaPython, level: 80 },
        { name: 'GraphQL', icon: SiGraphql, level: 75 },
        { name: 'MongoDB', icon: SiMongodb, level: 85 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 80 },
        { name: 'Redis', icon: SiRedis, level: 70 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 90 },
        { name: 'Docker', icon: FaDocker, level: 75 },
        { name: 'AWS', icon: FaAws, level: 70 },
        { name: 'Firebase', icon: SiFirebase, level: 85 },
        { name: 'Figma', icon: FaFigma, level: 80 }
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
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">My technical expertise and tools I work with</p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <skill.icon className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="skills-showcase" variants={itemVariants}>
          <h3 className="showcase-title">Tech Stack at a Glance</h3>
          <div className="tech-icons">
            {[FaReact, SiTypescript, FaNodeJs, SiMongodb, SiNextdotjs, FaPython, 
              FaDocker, FaGitAlt, SiPostgresql, FaAws, SiTailwindcss, SiGraphql].map((Icon, index) => (
              <motion.div
                key={index}
                className="tech-icon-wrapper"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="tech-icon" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
