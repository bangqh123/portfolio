import "./HomePage.scss"

import HeroSection from "./partials/Heros/Hero"
import LayoutPage from "../../layouts/LayoutPage/LayoutPage"
import About from "./partials/Abouts/About"
import Education from "./partials/Educations/Education"
import Experience from "./partials/Experiences/Experience"
import Skill from "./partials/Skill/Skill"
import { PROPS } from "../../configs/constants/homepage.config"

const HomePage = () => {
  return (
    <LayoutPage>
      <HeroSection {...PROPS.HERO} />
      <div className='content-wrapper'>
        <About  {...PROPS.ABOUTUS}/>
        <Education {...PROPS.EDUCATION}/>
        <Experience {...PROPS.EXPERIENCE}/>
        <Skill {...PROPS.SKILL}/>
      </div>
    </LayoutPage>
  )
};

export default HomePage;