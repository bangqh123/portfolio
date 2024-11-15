import { TContactData } from "../types/contactsType"

import CV from "../QH_Bang_FrontEnd.pdf"

import { ICONS } from "../assets/icons/index";

const contactData: TContactData[] = [
    {
        desc: "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
        icons: [
            { icon: ICONS.GIT, color: "git", link: "https://github.com/bangqh123" },
            { icon: ICONS.LINKIN, color: "linkedin", link: "https://www.linkedin.com/in/bang-quach-hai/"},
            { icon: ICONS.FACE, color: "face", link: "https://web.facebook.com/bang.quach.906"},
            { icon: ICONS.TWITTER, color: "twitter", link: "https://x.com/BangQuach4"}
        ],
        resume: CV,
        address: {
            desc: "Hung My, Cai Nuoc, Ca Mau, Viet Nam",
            link: "https://maps.app.goo.gl/3KoTTWgWMoQMwbLh6"
        }
    },
];

export default contactData;