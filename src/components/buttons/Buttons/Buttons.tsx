import "./Buttons.scss";

import React from "react";

interface TButtonsProps {
  link?: string;
  title?: string;
  className?: string;
  icon?: React.ReactNode;
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
    <button className={`button ${className}`} onClick={handleClick}>
      {icon}
      {title}
    </button>
  );
};

export default Buttons;