import "./About.scss";
import "./About.media.scss";

import React from "react";
import { IMAGES } from "../../../../assets/images";
import Button from "../../../../components/buttons/Buttons/Buttons";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

type TAboutUsProps = {
  title: string;
  myself: string;
  description1: string;
  description2: string;
  name: string;
  age: number;
  address: string;
  phone: string;
  email: string;
};

const About: React.FC<TAboutUsProps> = ({
  title,
  myself,
  description1,
  description2,
  name,
  age,
  address,
  phone,
  email,
}) => {
  return (
    <div id="about" className="about">
      <h1 className="about-title">{title}</h1>
      <div className="about-content">
        <div className="about-content-avatar">
          <div className="content-avatar-img">
            <img src={IMAGES.AVATAR} alt="Avatar" />
          </div>
        </div>
        <div className="about-content-information">
          <h2 dangerouslySetInnerHTML={{ __html: myself }} />
          <p>{description1}</p>
          <p>{description2}</p>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>:</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>:</td>
                <td>{address}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>:</td>
                <td>{email}</td>
              </tr>
            </tbody>
          </table>
          <div className="content-information-btn">
            {/* <Button
              newTab={true}
              download={true}
              title="Download cv"
              className="btn-download"
              link="/CV_QH_Bang_FE_0368459077.pdf"
            /> */}
            <Button className="btn-git" icon={<FaGithub />} link="https://github.com/bangqh123"/>
            <Button className="btn-link" icon={<FaLinkedinIn />} link="https://www.linkedin.com/in/bang-quach-265a0126b/"/>
            <Button className="btn-face" icon={<FaFacebookF />} link="https://web.facebook.com/bang.quach.906" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
