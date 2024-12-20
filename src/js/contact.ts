import { TContactData } from "../types/contactsType";

import CV from "../QH_Bang_FrontEnd.pdf";
import AVATAR from "../assets/images/contact.png";
import { ICONS } from "../assets/icons/index";

const contactData: TContactData = {
  hero: {
    img: AVATAR,
    alt: "Avatar picture",
    desc: "You can message me, I will reply within 24 hours. I can help you develop a website interface using React Js, TypeScript, Less, and Redux open source.",
    icons: [
      { 
        icon: ICONS.GIT, 
        color: "black", 
        link: "https://github.com/bangqh123"
      },
      {
        icon: ICONS.LINKIN,
        color: "#0077b5",
        link: "https://www.linkedin.com/in/bang-quach-hai/",
      },
      {
        icon: ICONS.FACE,
        color: "black",
        link: "https://web.facebook.com/bang.quach.906",
      },
      {
        icon: ICONS.TWITTER,
        color: "#1877f2",
        link: "https://x.com/BangQuach4",
      },
    ],
    resume: CV,
  },
  blog: {
    // desc: "Hung My, Cai Nuoc, Ca Mau, Viet Nam",
    // link: "https://maps.app.goo.gl/3KoTTWgWMoQMwbLh6"
  },
  address: {
    desc: "Hung My, Cai Nuoc, Ca Mau, Viet Nam",
    link: "https://maps.app.goo.gl/3KoTTWgWMoQMwbLh6",
  },
};
export default contactData;
