import "./Footer.scss";
import "./Footer.media.scss";

import React from "react";
import { IoIosHeartHalf } from "react-icons/io";
import { PiCopyrightFill } from "react-icons/pi";

type TFooterProps = {
  copyright: string,
  year: number,
  by: string,
  name: string,
}

const Footer: React.FC<TFooterProps> = ({copyright, year, by, name}) => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        {copyright}
        <PiCopyrightFill className="footer-copyright-img" />
        {year}
      </div>
      <div className="footer-develop">
        <IoIosHeartHalf className="footer-develop-first" />
        {by}
        <a href="https://github.com/bangqh123">{name}</a>
        <IoIosHeartHalf className="footer-develop-last" />
      </div>
    </footer>
  );
};

export default Footer;
