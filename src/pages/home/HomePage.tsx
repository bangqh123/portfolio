import './HomePage.scss'

import HeroSection from './sections/Heros/Hero'
import LayoutLandingPage from "../../layouts/LayoutLandingPage/LayoutLandingPage";
import About from './sections/Abouts/About';
import Education from './sections/Educations/Education';
import Experience from './sections/Experiences/Experience';
import Skill from './sections/Skill/Skill';
import Project from './sections/Projects/Project';
import Contact from './sections/Contacts/Contact';

const HomePage = () => {
  return (
    <LayoutLandingPage>
      <HeroSection />
      <div className='content-wrapper'>
        < About />
        <Education />
        <Experience />
        <Skill />
        <Project />
        <Contact />
      </div>
    </LayoutLandingPage>
  )
};

export default HomePage;