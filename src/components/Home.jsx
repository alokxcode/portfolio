import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import AboutDropdown from './AboutDropdown';
import ContactDropdown from './ContactDropdown';
import DiscordStatusDropdown from './DiscordStatusDropdown';

const Home = () => {
  const [theme, setTheme] = useState('dark');
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isDiscordDropdownOpen, setIsDiscordDropdownOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsContactDropdownOpen(false);
    setIsDiscordDropdownOpen(false);
  };
  const closeAboutDropdown = () => setIsAboutDropdownOpen(false);
  
  const toggleContactDropdown = () => {
    setIsContactDropdownOpen(!isContactDropdownOpen);
    setIsAboutDropdownOpen(false);
    setIsDiscordDropdownOpen(false);
  };
  const closeContactDropdown = () => setIsContactDropdownOpen(false);

  const toggleDiscordDropdown = () => {
    setIsDiscordDropdownOpen(!isDiscordDropdownOpen);
    setIsAboutDropdownOpen(false);
    setIsContactDropdownOpen(false);
  };
  const closeDiscordDropdown = () => setIsDiscordDropdownOpen(false);

  return (
    <>
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onAboutClick={toggleAboutDropdown}
        onContactClick={toggleContactDropdown}
        onDiscordClick={toggleDiscordDropdown}
      />
      <AboutDropdown 
        isOpen={isAboutDropdownOpen} 
        onClose={closeAboutDropdown}
        onContactClick={toggleContactDropdown}
      />
      <ContactDropdown 
        isOpen={isContactDropdownOpen} 
        onClose={closeContactDropdown} 
      />
      <DiscordStatusDropdown 
        isOpen={isDiscordDropdownOpen} 
        onClose={closeDiscordDropdown} 
        userId="1381138523113000970" 
      />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
    </>
  );
};

export default Home;
