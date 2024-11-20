import "./ExperiencePage.scss"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience } from "../../redux/slices/experienceSlices";
import { RootState, AppDispatch } from "../../redux/store/store";
import LayoutPage from "../../layouts/LayoutPage/LayoutPage";
import Hero from "./partials/Hero/Hero";
import Works from "./partials/Works/Works";
import Interships from "./partials/Interships/Internships";
import Skills from "./partials/Skills/Skills";
import { PROPS } from "../../configs/constants/experiencepage.config";

const ExperiencePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { experienceInfo } = useSelector(
    (state: RootState) => state.experience
  );

  useEffect(() => {
    if (!experienceInfo) {
      dispatch(fetchExperience());
    }
  }, [dispatch, experienceInfo]);

  return (
    <LayoutPage>
      <div className='experience'>
        <Hero {...PROPS.HERO} />
        <Works {...PROPS.WORK}/>
        <Interships {...PROPS.INTERSHIP} />
        <Skills {...PROPS.SKILL} />
      </div>
    </LayoutPage>
  )
};

export default ExperiencePage;