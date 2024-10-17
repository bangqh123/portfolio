import React from "react";
import "./ButtonIcon.scss";

interface ButtonProps {
    icon: React.ReactNode;
    className?: string;
    link: string;
}

const ButtonIcon: React.FC<ButtonProps> = ({ className, icon, link}) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <button className={`button-icon ${className}`} onClick={handleClick}>
        {icon}
    </button> 
  )
};

export default ButtonIcon;
