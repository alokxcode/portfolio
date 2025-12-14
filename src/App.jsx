import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  const previousPath = useRef('/');

  useLayoutEffect(() => {
    // If coming back to home page from a project page
    if (pathname === '/' && previousPath.current.startsWith('/project/')) {
      // Scroll to projects section
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else if (pathname !== '/') {
      // Scroll to top for project details page
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }

    previousPath.current = pathname;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
