import "./EducationPage.scss"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { fetchEducation } from "../../redux/slices/educationSlies";

import LayoutPage from "../../layouts/LayoutPage/LayoutPage";
import Hero from "./partials/Hero/Hero";
import { PROPS } from "../../configs/constants/educationpage.config";
import Degrees from "./partials/Degrees/Degrees";
import Certifications from "./partials/Certifications/Certifications";

const EducationPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { educationInfo } = useSelector(
    (state: RootState) => state.education
  );

  useEffect(() => {
    if (!educationInfo) {
      dispatch(fetchEducation());
    }
  }, [dispatch, educationInfo]);

  return (
    <LayoutPage>
      <div className='education'>
        <Hero {...PROPS.HERO}/>
        <Degrees {...PROPS.DEGRESS}/>
        <Certifications {...PROPS.CERTIFICATION}/>
      </div>
    </LayoutPage>
  )
};

export default EducationPage;