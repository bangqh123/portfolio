import { TUserData } from "../types/usersType";

import HeroImg from "../assets/images/hero.png";

import { ICONS } from "../assets/icons/index";

// Portfolio data structure
const portfolioData: TUserData[] = [
  {
    hero: {
      name: "Quach Hai Bang",
      desc1:
        "I am a Front-End programmer with more than 1 year of experience in HTML & CSS, JavaScript and nearly 4 months of experience in learning and developing TypeScript with the ReactJs library. I can use Bootstrap and Tailwind with Ant Design.",
      desc2:
        "I have actively researched and developed projects such as W3school`s The Band, Mentor Frontend QR code component and Blog preview card, Shop and F_News, which helped me practice teamwork, communication, problem-solving and investigation skills.",
      img: HeroImg,
      git: "https://github.com/bangqh123",
      linkin: "https://www.linkedin.com/in/bang-quach-hai/",
      facebook: "https://web.facebook.com/bang.quach.906",
      gitrepo: "https://github.com/bangqh123/portfolio",
      twitter: "https://x.com/BangQuach4",
    },
    whatido: [
      {
        title: "Front End Developer",
        fileName: "FrontEndImg",
        icons: [
          {
            name: "Bootstrap",
            icon: ICONS.BOOTSTRAP,
          },
          {
            name: "TypeScript",
            icon: ICONS.TYPE,
          },
          {
            name: "JavaScript",
            icon: ICONS.JAVA,
          },
          {
            name: "ReactJS",
            icon: ICONS.REACT,
          },
          {
            name: "SASS",
            icon: ICONS.SASS,
          },
        ],
        desc: [
          "Build front-end with React, Redux, JavaScript, Ant Design, TypeScript.",
          "Responsive front-end design using CSS and Sass, Less",
        ]
      },
      {
        title: "Back End Developer",
        fileName: "BackEndImg",
        icons: [
          {
            name: "NodeJS",
            icon: ICONS.NODE,
          },
          {
            name: "Express",
            icon: ICONS.EXPRESS,
          },
          {
            name: "MySQL",
            icon: ICONS.MYSQL,
          },
          {
            name: "MongoDB",
            icon: ICONS.MONGO,
          },
          {
            name: "NPM",
            icon: ICONS.NPM,
          },
        ],
        desc: [
          "Create application backend in Node & Express.",
          "Relational and non-relational databases MySQL and MongoDB.",
        ]
      },
      {
        title: "UI/UX Design",
        fileName: "DesignImg",
        icons: [
          {
            name: "Figma",
            icon: ICONS.FIGMA,
          },
          {
            name: "Axure",
            icon: ICONS.AXURE,
          },
          {
            name: "Canva",
            icon: ICONS.CANVA,
          },
        ],
        desc: [
          "Designing beautiful user interfaces for web applications.",
          "Customizing logo designs and building logos from scratch.",
          "Create the flow of application functionalities to optimize user experience.",
        ]
      }
    ]
  },
];

export default portfolioData;
