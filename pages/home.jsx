import '../style_css/firstPage.css';
import '../style_css/homePageEffect.css';
import avatar from '../src/assets/avatar1.png';
import instagram from '../src/assets/instagram.png';
import github from '../src/assets/github.png';
import linkedin from '../src/assets/linkedin.png';
import facebook from '../src/assets/facebook.png';
import { Link } from 'react-router-dom';

import { useEffect, useContext } from 'react';
import About from '../components/about';
import Header from '../components/header';
import Project from '../components/project';
import Contact from '../components/contact';


function Home() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showAboutPage');
        } else {
          entry.target.classList.remove('showAboutPage');
        }
      });
    });

    const hiddenElement = document.querySelectorAll('.hiddenAboutPage');
    hiddenElement.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  // Use effect to observe the Project section
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showProjectPage');
        } else {
          entry.target.classList.remove('showProjectPage');
        }
      });
    });

    const hiddenElement = document.querySelectorAll('.hiddenProjectPage');
    hiddenElement.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  // Function to handle CV download
  function handleDownloadCV() {
    const link = document.createElement('a');
    link.href = '../pdf/CV.pdf'; // Update this path to your actual CV file
    link.download = 'Minh Luan Lu CV.pdf'; // The name of the file when downloaded
    link.click();
  }

  return (
    <>
      <Header />
      <section className='firstPage'>
        <div className='left-section'>
          <div className='left-section-Container'>
            <button className='nameText'>Minh Luan Lu</button>
            <p className='careerText'>I'm a <span className='programmer'>Programmer</span></p>
            <p className='descriptionText'>
              Right now, I am an intern at my school, AARHUSTECH in Hasselager, Aarhus. My program is called Data Technician with a specialization in Programming. It typically involves working with software development in various programming languages for different platforms.
            </p>
            <p style={{ marginLeft: '10px' }}>
              My Portfolio Projects <Link to="/Project">here</Link>
            </p>

            <div className='button-Container'>
              <button className='hire-me-btn'>Hire Me</button>
              <button className='download-CV' onClick={handleDownloadCV}>Download CV</button>
            </div>

            <div className='link-btn'>
              <a className='btn' href="https://www.instagram.com/minh.lu_00/" target='blank'><img className='icon-btn' src={instagram} alt="" /></a>
              <a className='btn' href="https://www.linkedin.com/in/minh-luan-lu/" target='blank'><img className='icon-btn' src={linkedin} alt="" /></a>
              <a className='btn' href="https://www.facebook.com/profile.php?id=100033714324004" target='blank'><img className='icon-btn' src={facebook} alt="" /></a>
              <a className='btn' href="https://github.com/MinhLuanLu" target='blank'><img className='icon-btn' src={github} alt="" /></a>
            </div>
          </div>
        </div>
        <div className='right-section'>
          <div className='right-section-Container'>
            <img className='avatar' src={avatar} alt="Avatar" />
          </div>
        </div>
        <button className='scroll-btn'>Scroll Down</button>
      </section>

      <section className='hiddenAboutPage'>
        <About />
      </section>

      <div className='hiddenProjectPage'>
        <Project />
      </div>

      <div style={{ marginTop: '-100px' }} className='hiddenAboutPage'>
        <Contact />
      </div>
    </>
  );
}

export default Home;
