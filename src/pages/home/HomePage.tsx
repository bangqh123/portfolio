import './HomePage.scss'

import HeroSection from './sections/Heros/Hero'
import LayoutLandingPage from "../../layouts/LayoutLandingPage/LayoutLandingPage";
import About from './sections/Abouts/About';
import Education from './sections/Educations/Education';
import Experience from './sections/Experiences/Experience';
import Skill from './sections/Skill/Skill';
import Project from './sections/Projects/Project';
import Contact from './sections/Contacts/Contact';
import { PROPS } from '../../configs/constants/homepage.config';

const HomePage = () => {
  return (
    <LayoutLandingPage>
      <HeroSection {...PROPS.HERO} />
      <div className='content-wrapper'>
        <About  {...PROPS.ABOUTUS}/>
        <Education {...PROPS.EDUCATION}/>
        <Experience />
        <Skill />
        <Project />
        <Contact />
      </div>
    </LayoutLandingPage>
  )
};

export default HomePage;