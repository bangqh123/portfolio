import "./Hero.scss";
import "./Hero.media.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import Button from "../../../../components/buttons/Buttons/Buttons";
import { RootState, AppDispatch } from "../../../../redux/store/store";

interface THero {
  name: string;
  desc1: string;
  desc2: string;
  img: string;
  git: string;
  linkin: string;
  facebook: string;
  gitrepo: string;
  twitter: string;
}

const Hero: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isData, setIsData] = useState<THero>();

  const { userInfo } = useSelector((state: RootState) => state.portfolio);

  useEffect(() => {
    setIsData(userInfo?.[0].hero);
  }, [dispatch, userInfo]);

  return (
    <>
      <div id="hero" className="hero">
        <div className="hero-content">
          <h3>
            <a href={isData?.linkin}>{isData?.name}</a>
          </h3>
          <p>{isData?.desc1}</p>
          <p>{isData?.desc2}</p>
          <div className="hero-content-btn">
            <Button
              newTab={true}
              icon={<FaGithub />}
              className="git"
              link={isData?.git}
            />
            <Button
              newTab={true}
              icon={<FaLinkedinIn />}
              className="linkin"
              link={isData?.linkin}
            />
            <Button
              newTab={true}
              icon={<FaXTwitter />}
              className="twitter"
              link={isData?.twitter}
            />
            <Button
              newTab={true}
              icon={<FaFacebookF />}
              className="face"
              link={isData?.facebook}
            />
          </div>
          <Button
            newTab={true}
            icon={<FaStar />}
            title="Start me on Github"
            className="hero-content-git"
            link={isData?.gitrepo}
          />
        </div>
        <div className="hero-img">
          <img src={isData?.img} alt="Avatar Profolio" />
        </div>
      </div>
    </>
  );
};

export default Hero;
