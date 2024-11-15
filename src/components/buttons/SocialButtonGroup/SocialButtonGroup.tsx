import "./SocialButtonGroup.scss"

import React from "react";
import Button from "../Buttons/Buttons";

type TSocailButtonProps = {
  classname: string;
  data?: TData[];
};

interface TData {
  icon: React.ReactNode;
  color: string;
  link: string;
}

const SocailButton: React.FC<TSocailButtonProps> = ({ classname, data }) => {
  return (
    <div className={`social ${classname}`}>
      {data?.map((social, index) =>(
        <Button 
            key={index}
            newTab={true}
            className="icon"
            icon={social.icon}
            link={social.link}
            color={social.color}
        />
      ))}
    </div>
  );
};

export default SocailButton;
