import "./Buttons.scss";

import React from "react";

interface TButtonsProps {
  link?: string;
  title?: string;
  className?: string;
  color?: string;
  icon?: React.ReactNode | string;
  newTab?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Buttons: React.FC<TButtonsProps> = ({
  title,
  className,
  icon,
  link,
  newTab,
  onClick,
  color
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    } else if (link) {
      if (newTab === true) {
        window.open(link, "_blank");
      } else {
        window.location.href = link;
      }
    }
  };  

  return (
    <button className={`button ${className} ${color}`} onClick={handleClick}>
      {typeof icon === "string" ? (
        <img src={icon} alt="" />
      ) : (
        icon
      )}
      {title}
    </button>
  );
};

export default Buttons;