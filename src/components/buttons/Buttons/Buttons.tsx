import "./Buttons.scss";

import React from "react";

interface TButtonsProps {
  link?: string;
  title?: string;
  className?: string;
  icon?: React.ReactNode;
  scroll?: () => void;
  download?: boolean;
  newTab?: boolean;
}

const Buttons: React.FC<TButtonsProps> = ({ title, className, icon, link, scroll, download, newTab }) => {
  const handleClick = () => {
    if (scroll) {
      scroll();
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
      {title}
      {icon}
    </button>
  );
};

export default Buttons;