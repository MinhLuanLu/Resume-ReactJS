import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home'
import AboutPage from '../pages/about';
import ProjectPage from '../pages/project';
import PortfolioProjects from '../portfolio-Projects/portfolio-Projects'
import ContactPage from '../pages/contact';

import { ChangePageProvider } from '../contextAPI/changePageContext';

function App() {
  

  return (
    <>
      <ChangePageProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<AboutPage/>}/>
            <Route path='/Project' element={<ProjectPage/>}/>
            <Route path='/PortfolioProjects' element={<PortfolioProjects/>}/>
            <Route path='/Contact' element={<ContactPage/>}/>
          </Routes>
        </BrowserRouter>
      </ChangePageProvider>
    </>
  )
}

export default App
