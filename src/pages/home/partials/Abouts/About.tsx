import "./About.scss";
import "./About.media.scss";

import React, { useEffect, useState } from "react";
import Button from "../../../../components/buttons/Buttons/Buttons";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { RootState, AppDispatch } from "../../../../redux/store/store";
import { fetchPortfolio } from "../../../../redux/slices/portfolioSlices";
import { useDispatch, useSelector } from "react-redux";

type TAboutUsProps = {
  title: string;
  myself: string;
  name: string;
  age: string;
  address: string;
  phone: string;
  email: string;
};

interface TAbout {
  name: string;
  age: number;
  image: string;
  address: string;
  phone: string;
  email: string;
  major: string;
  desc1: string;
  desc2: string;
  git: string;
  linkin: string;
  facebook: string;
}

const About: React.FC<TAboutUsProps> = ({
  title,
  myself,
  name,
  age,
  address,
  phone,
  email,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isData, setIsData] = useState<TAbout>();
  
  const { userInfo } = useSelector(
    (state: RootState) => state.portfolio
  );
  
  useEffect(() => {
    if (!userInfo?.[0]) {
      dispatch(fetchPortfolio());
    } else {
      setIsData(userInfo?.[0].about); 
    }
  }, [dispatch, userInfo]);
  
  return (
    <div id="about" className="about">
      <h1 className="about-title">{title}</h1>
      <div className="about-content">
        <div className="about-content-avatar">
          <div className="content-avatar-img">
            <img src={isData?.image} alt="Avatar" />
          </div>
        </div>
        <div className="about-content-information">
          <h2>
            {myself}
            <strong>{isData?.major}</strong>
          </h2>
          <p>{isData?.desc1}</p>
          <p>{isData?.desc2}</p>
          <table>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>:</td>
                <td>{isData?.name}</td>
              </tr>
              <tr>
                <td>{age}</td>
                <td>:</td>
                <td>{isData?.age}</td>
              </tr>
              <tr>
                <td>{phone}</td>
                <td>:</td>
                <td>{isData?.phone}</td>
              </tr>
              <tr>
                <td>{email}</td>
                <td>:</td>
                <td>{isData?.email}</td>
              </tr>
              <tr>
                <td>{address}</td>
                <td>:</td>
                <td>{isData?.address}</td>
              </tr>
            </tbody>
          </table>
          <div className="content-information-btn">
            <Button className="btn-git" icon={<FaGithub />} link={isData?.git}/>
            <Button className="btn-link" icon={<FaLinkedinIn />} link={isData?.linkin} />
            <Button className="btn-face" icon={<FaFacebookF />} link={isData?.facebook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
