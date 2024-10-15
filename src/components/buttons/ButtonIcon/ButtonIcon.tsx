import React from "react";
import "./ButtonIcon.scss";

interface ButtonProps {
    icon: React.ReactNode;
    className?: string;
}

const ButtonIcon: React.FC<ButtonProps> = ({ className, icon}) => {
  return (
    <button className={`button-icon ${className}`}>
        {icon}
    </button>
  )
};

export default ButtonIcon;
