import "./HomePage.scss"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio } from "../../redux/slices/portfolioSlices";
import { RootState, AppDispatch } from "../../redux/store/store";

import HeroSection from "./partials/Heros/Hero"
import LayoutPage from "../../layouts/LayoutPage/LayoutPage"
import About from "./partials/Abouts/About"
import Education from "./partials/Educations/Education"
import Experience from "./partials/Experiences/Experience"
import Skill from "./partials/Skill/Skill"
import { PROPS } from "../../configs/constants/homepage.config"

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { userInfo } = useSelector(
    (state: RootState) => state.portfolio
  );

  useEffect(() => {
    if (!userInfo) {
      dispatch(fetchPortfolio());
    }
  }, [dispatch, userInfo]);

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