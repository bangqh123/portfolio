// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPortfolio } from "../../redux/slices/portfolioSlices";
// import { RootState, AppDispatch } from "../../redux/store/store";

import LayoutPage from "../../layouts/LayoutPage/LayoutPage";
// import Skill from "./partials/Skill/Skill"
// import { PROPS } from "../../configs/constants/homepage.config"

const ExperiencePage = () => {
//   const dispatch = useDispatch<AppDispatch>();

//   const { userInfo } = useSelector(
//     (state: RootState) => state.portfolio
//   );

//   useEffect(() => {
//     if (!userInfo) {
//       dispatch(fetchPortfolio());
//     }
//   }, [dispatch, userInfo]);

  return (
    <LayoutPage>
      <div className='content-wrapper'>
        Ex
      </div>
    </LayoutPage>
  )
};

export default ExperiencePage;