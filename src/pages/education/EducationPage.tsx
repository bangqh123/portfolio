import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store/store";
import { fetchEducation } from "../../redux/slices/educationSlies";

import LayoutPage from "../../layouts/LayoutPage/LayoutPage";
import Hero from "./partials/Hero/Hero";
import { PROPS } from "../../configs/constants/educationpage.config";

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
      <div className='content-wrapper'>
        <Hero {...PROPS.HERO}/>
      </div>
    </LayoutPage>
  )
};

export default EducationPage;