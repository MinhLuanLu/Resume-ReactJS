import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter for GitHub Pages
import Home from '../pages/home';
import AboutPage from '../pages/about';
import ProjectPage from '../pages/project';
import PortfolioProjects from '../portfolio-Projects/portfolio-Projects';
import ContactPage from '../pages/contact';

import { ChangePageProvider } from '../contextAPI/changePageContext';

function App() {
  return (
    <>
      <h1>HEllo</h1>
    </>
  );
}

export default App;
