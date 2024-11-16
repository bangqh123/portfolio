import "./Hero.scss";
import "./Hero.media.scss";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
// import SocailButton from "../../../../components/buttons/SocialButtonGroup/SocialButtonGroup";
// import Button from "../../../../components/buttons/Buttons/Buttons";

type THeroProps = {
  title: string;
};

interface THero {
  desc: string;
  icons: {
    icon: string;
    name: string;
    link: string;
  }[];
}

const Hero: React.FC<THeroProps> = ({ title }) => {
  const [isData, setIsData] = useState<THero>();

  const { educationInfo } = useSelector(
    (state: RootState) => state.education
  );

  useEffect(() => {
    setIsData(educationInfo?.hero)
  }, [educationInfo]);

  console.log(isData)

  return (
    <div className="contacthero">
        {title}
      {/* <div className="contacthero-img">
        <img src={isData?.img} alt={isData?.alt} />
      </div>
      <div className="contacthero-content">
        <h1 className="contacthero-content-title">{contact}</h1>
        <p className="contacthero-content-desc">{isData?.desc}</p>
        <SocailButton
          classname="contacthero-content-btn"
          data={isData?.icons}
        />
        <Button
          newTab={true}
          title="See My Resume"
          link={isData?.resume}
          className="contacthero-content-resume"
        />
      </div> */}
    </div>
  );
};

export default Hero;
