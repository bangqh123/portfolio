import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio } from "../../redux/slices/portfolioSlices";
import { RootState, AppDispatch } from "../../redux/store/store";

import LayoutPage from "../../layouts/LayoutPage/LayoutPage"
import HeroSection from "./partials/Heros/Hero"
import IDo from "./partials/IDo/IDo";
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
      <div className='home'>
        <HeroSection />
        <IDo {...PROPS.WHAT}/>
      </div>
    </LayoutPage>
  )
};

export default HomePage;