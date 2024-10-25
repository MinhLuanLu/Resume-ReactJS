// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import ProjectPage from '../pages/project.jsx';
import PortfolioProjects from '../portfolio-Projects/portfolio-Projects.jsx';
import ContactPage from '../pages/contact.jsx';
import NotFound from '../pages/notFound.jsx'; // Assuming you have a NotFound component

// Create the router with all routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Resume-ReactJS/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='project' element={<ProjectPage />} />
      <Route path='portfolioProjects' element={<PortfolioProjects />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='*' element={<NotFound />} /> {/* Catch-all route */}
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
