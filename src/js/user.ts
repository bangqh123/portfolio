import { TUserPortfolio } from "../types/usersType";

import HeroImg from "../assets/images/hero.png";
import AboutImg from "../assets/images/about.png";
import CV from "../QH_Bang_FrontEnd.pdf";

// Portfolio data structure
const portfolioData: TUserPortfolio[] = [
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
    about: {
      img: AboutImg,
      age: 24,
      address: "Cai Nuoc, Ca Mau, Viet Nam",
      phone: "0368459077",
      email: "quachbang2404@gmail.com",
      name: "Quach Hai Bang",
      major: "Front-End Developer",
      desc1:
        "I am a Front-End programmer with more than 1 year of experience in HTML & CSS, JavaScript and nearly 4 months of experience in learning and developing TypeScript with the ReactJs library. I can use Bootstrap and Tailwind with Ant Design.",
      desc2:
        "I have actively researched and developed projects such as W3school`s The Band, Mentor Frontend QR code component and Blog preview card, Shop and F_News, which helped me practice teamwork, communication, problem-solving and investigation skills.",
      git: "https://github.com/bangqh123",
      linkin: "https://www.linkedin.com/in/bang-quach-hai/",
      facebook: "https://web.facebook.com/bang.quach.906",
    },
    education: [
      {
        school_name: "University of Greenwich (Can Tho)",
        major: "computer science",
        desc: "HTML & CSS, Java, PhP, C#",
        gpa: "3.55/4",
        start: "Jul 2018",
        end: "Jul 2023",
      },
    ],
    experience: [
      {
        job: "Front end developer",
        company: "LikeLion",
        desc: "HTML & CSS, JavaScript, TypeScript, ReactJS",
        role1: "Programme outsourcing projects",
        role2:
          "Create coding frames and design database based on project descriptions",
        start: "Jun 2024",
        end: "Nov 2024",
      },
      {
        job: "Front end developer",
        company: "IVS(Can Tho)",
        desc: "HTML & CSS, PhP(Laravel), MySQL",
        role1: "Programme outsourcing projects",
        role2:
          "Create coding frames and design database based on project descriptions",
        start: "Nov 2021",
        end: "Apr 2022",
      },
    ],
    skill: {
      technical: [
        {
          name: "Programming",
          desc: "HTML, CSS, JavaScript, TypeScript, ReactJS",
        },
        {
          name: "Databases",
          desc: "MongoDB, MySQL, SQLServer",
        },
        {
          name: "Libraries",
          desc: "Bootstrap, Tailwind, Ant Design, React",
        },
        {
          name: "Tools",
          desc: "VSCode, Git, PostMan, Figma, Vercel",
        },
      ],
      soft: [
        {
          name: "Team Work",
        },
        {
          name: "Communication",
        },
        {
          name: "Problem-Solving",
        },
      ],
    },
    resume: {
      cv: CV,
    },
  },
];

export default portfolioData;
