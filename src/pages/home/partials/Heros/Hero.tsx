import "./Hero.scss";
import "./Hero.media.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICONS } from "../../../../assets/icons";
import Button from "../../../../components/buttons/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../../../../redux/store/store";
import { fetchPortfolio } from "../../../../redux/slices/portfolioSlices";

type THeroProps = {
  title: string;
  name: string;
};

interface THero {
  name: string;
  desc: string;
  image: string;
};

const Hero: React.FC<THeroProps> = ({ title, name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [isData, setIsData] = useState<THero>();
  
  const { userInfo } = useSelector(
    (state: RootState) => state.portfolio
  );
  
  useEffect(() => {
    if (!userInfo?.[0]) {
      dispatch(fetchPortfolio());
    } else {
      setIsData(userInfo?.[0].hero); 
    }
  }, [dispatch, userInfo]);

  const handleContact = () => {
    navigate("/contact");
  };
  
  return (
    <>
      <div id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-content-title">
            {title}
            <img src={ICONS.HI} alt="Icon Hi" />
          </h1>
          <h3>
            {name}
            <a href="https://www.linkedin.com/in/bang-quach-hai/">{isData?.name}</a>
          </h3>
          <p>{isData?.desc}</p>
          <Button
            title="Contact Me"
            className="hero-content-btn"
            onClick={handleContact}
          />
        </div>
        <div className="hero-img">
          <img src={isData?.image} alt="Avatar Profolio" />
        </div>
      </div>
    </>
  );
};

export default Hero;
