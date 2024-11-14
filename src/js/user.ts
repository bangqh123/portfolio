import { TUserData } from "../types/usersType";

import HeroImg from "../assets/images/hero.png";
import Axure from "../assets/icons/axure.svg"

import { SiNpm } from "react-icons/si";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb, SiSass, SiExpress, SiCanva } from "react-icons/si";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { FaHtml5, FaNodeJs, FaBootstrap,FaFigma } from "react-icons/fa6"

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
            name: "HTML5",
            icon: FaHtml5,
            color: "#e34f26",
          },
          {
            name: "CSS3",
            icon: IoLogoCss3,
            color: "#1572b6"
          },
          {
            name: "Bootstrap",
            icon: FaBootstrap,
            color: "#8613f3",
          },
          {
            name: "TypeScript",
            icon: BiLogoTypescript,
            color: "#3178c6",
          },
          {
            name: "JavaScript",
            icon: BiLogoJavascript,
            color: "#f7df1e",
          },
          {
            name: "ReactJS",
            icon: GrReactjs,
            color: "#61dafb",
          },
          {
            name: "SASS",
            icon: SiSass,
            color: "#cc6699",
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
            icon: FaNodeJs,
            color: "#339933",
          },
          {
            name: "Express",
            icon: SiExpress,
          },
          {
            name: "MySQL",
            icon: GrMysql,
            color: "#507e9c",
          },
          {
            name: "MongoDB",
            icon: SiMongodb,
            color: "#47a248",
          },
          {
            name: "NPM",
            icon: SiNpm,
            color: "#cb3837",
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
            icon: FaFigma,
            color: "#f24e1e"
          },
          {
            name: "Axure",
            icon: Axure,
            color: ""
          },
          {
            name: "Canva",
            icon: SiCanva,
            color: "#4570dc"
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
