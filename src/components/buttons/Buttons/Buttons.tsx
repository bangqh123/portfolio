import "./Buttons.scss";

import React from "react";

interface TButtonsProps {
  link?: string;
  title?: string;
  className?: string;
  icon?: React.ReactNode;
  download?: boolean;
  newTab?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Buttons: React.FC<TButtonsProps> = ({ title, className, icon, link, download, newTab, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    } else if (link) {
      if (newTab) {
        window.open(link, "_blank");
      } else if (download) {
        const linkElement = document.createElement("a");
        linkElement.href = link;
        linkElement.download = "CV_Quach_Hai_Bang.pdf";
        linkElement.click();
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