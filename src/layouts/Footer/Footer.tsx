import "./Footer.scss";
import "./Footer.media.scss";

import { IoIosHeartHalf } from "react-icons/io";
import { PiCopyrightFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer">
      <IoIosHeartHalf className="footer-heart"/>
      Developing by
      <PiCopyrightFill className="footer-copyright"/>
      <a href="https://github.com/bangqh123">Quach Hai Bang</a>
      <IoIosHeartHalf className="footer-heart"/>
    </footer>
  );
};

export default Footer;
