import './HomePage.scss'

import HeroSection from './partials/Heros/Hero'
import LayoutLandingPage from "../../layouts/LayoutLandingPage/LayoutLandingPage";
import About from './partials/Abouts/About';
import Education from './partials/Educations/Education';
import Experience from './partials/Experiences/Experience';
import Skill from './partials/Skill/Skill';
import Project from './partials/Projects/Project';
import Contact from './partials/Contacts/Contact';
import { PROPS } from '../../configs/constants/homepage.config';

const HomePage = () => {
  return (
    <LayoutLandingPage>
      <HeroSection {...PROPS.HERO} />
      <div className='content-wrapper'>
        <About  {...PROPS.ABOUTUS}/>
        <Education {...PROPS.EDUCATION}/>
        <Experience {...PROPS.EXPERIENCE}/>
        <Skill />
        <Project />
        <Contact />
      </div>
    </LayoutLandingPage>
  )
};

export default HomePage;