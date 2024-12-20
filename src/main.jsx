import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import ProjectPage from '../pages/project.jsx';
import ContactPage from '../pages/contact.jsx';
import PortfolioProjects from '../portfolio-Projects/portfolio-Projects.jsx';

// Create the router with all routes
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="portfolioProjects" element={<PortfolioProjects />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
