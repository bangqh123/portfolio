import "./Hero.scss";
import "./Hero.media.scss";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../../../components/buttons/Buttons/Buttons";
import { RootState } from "../../../../redux/store/store";
import SocailButton from "../../../../components/buttons/SocialButtonGroup/SocialButtonGroup";

interface THero {
  name: string;
  desc: string[];
  img: string;
  repo: TRepo;
  socials: TSocial[] | undefined;
}

interface TSocial {
  icon: React.ReactNode;
  color: string;
  link: string;
}

interface TRepo {
  icon: string;
  link: string;
}

const Hero: React.FC = () => {
  const [isData, setIsData] = useState<THero | undefined>();
  const [socialsData, setSocialsData] = useState<TSocial[] | undefined>();

  const { userInfo } = useSelector((state: RootState) => state.portfolio);

  useEffect(() => {
    const heroData = userInfo?.hero;
    setIsData(userInfo?.hero);
    setSocialsData(heroData?.socials);
  }, [userInfo]);

  return (
    <div id="hero" className="hero">
      <div className="hero-content">
        <h3>
          <a href="#">{isData?.name}</a>
        </h3>
        {isData?.desc?.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
        <SocailButton
          classname="hero-content-btn"
          data={socialsData}
        />
        <Button
          newTab={true}
          icon={isData?.repo.icon}
          title="Star me on Github"
          className="hero-content-git"
          link={isData?.repo.link}
        />
      </div>
      <div className="hero-img">
        <img src={isData?.img} alt="Avatar Portfolio" />
      </div>
    </div>
  );
};

export default Hero;
