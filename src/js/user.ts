import { TUserData } from "../types/usersType";

import HeroImg from "../assets/images/hero.png";

import { ICONS } from "../assets/icons/index";

// Portfolio data structure
const portfolioData: TUserData[] = [
  {
    hero: {
      name: "Quach Hai Bang",
      desc: [
        "I am a Front-End programmer with more than 1 year of experience in HTML & CSS, JavaScript and nearly 4 months of experience in learning and developing TypeScript with the ReactJs library. I can use Bootstrap and Tailwind with Ant Design.",
        "I have actively researched and developed projects such as W3school`s The Band, Mentor Frontend QR code component and Blog preview card, Shop and F_News, which helped me practice teamwork, communication, problem-solving and investigation skills.",
      ],
      img: HeroImg,
      socials: [
        { icon: ICONS.GIT, color: "git", link: "https://github.com/bangqh123" },
        { icon: ICONS.LINKIN, color: "linkedin", link: "https://www.linkedin.com/in/bang-quach-hai/"},
        { icon: ICONS.FACE, color: "face", link: "https://web.facebook.com/bang.quach.906"},
        { icon: ICONS.TWITTER, color: "twitter", link: "https://x.com/BangQuach4"}
      ],
      repo: {
        icon: ICONS.STAR,
        link: "https://github.com/bangqh123/portfolio",
      }
    },
    whatido: [
      {
        id: "frontend",
        title: "Front End Developer",
        fileName: "FrontEndImg",
        icons: [
          { name: "Bootstrap", icon: ICONS.BOOTSTRAP },
          { name: "TypeScript", icon: ICONS.TYPE },
          { name: "JavaScript", icon: ICONS.JAVA },
          { name: "ReactJS", icon: ICONS.REACT },
          { name: "SASS", icon: ICONS.SASS },
        ],
        descs: [
          {
            icon: ICONS.LIGHTNING,
            desc: "Build front-end with React, Redux, TypeScript and JavaScript",
          },
          {
            icon: ICONS.LIGHTNING,
            desc: "Responsive front-end design using CSS and Sass, Less",
          }
        ],
      },
      {
        id: "backend",
        title: "Back End Developer",
        fileName: "BackEndImg",
        icons: [
          { name: "NodeJS", icon: ICONS.NODE },
          { name: "Express", icon: ICONS.EXPRESS },
          { name: "MySQL", icon: ICONS.MYSQL },
          { name: "MongoDB", icon: ICONS.MONGO },
          { name: "NPM", icon: ICONS.NPM },
        ],
        descs: [
          {
            icon: ICONS.LIGHTNING,
            desc: "Create application backend in Node & Express.",
          },
          {
            icon: ICONS.LIGHTNING,
            desc: "Relational and non-relational databases MySQL and MongoDB.",
          }
        ],
      },
      {
        id: "design",
        title: "UI/UX Design",
        fileName: "DesignImg",
        icons: [
          { name: "Figma", icon: ICONS.FIGMA },
          { name: "Axure", icon: ICONS.AXURE },
          { name: "Canva", icon: ICONS.CANVA },
        ],
        descs: [
          {
            icon: ICONS.LIGHTNING,
            desc: "Designing beautiful user interfaces for web applications.",
          },
          {
            icon: ICONS.LIGHTNING,
            desc: "Customizing logo designs and building logos from scratch.",
          },
          {
            icon: ICONS.LIGHTNING,
            desc: "Create the flow of application functionalities to optimize user experience.",
          }
        ],
      },
    ],
  },
];

export default portfolioData;
