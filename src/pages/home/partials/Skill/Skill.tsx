import "./Skill.scss";

import React, { useState } from "react";
import SkillItem from "./SkillItem/SkillItem";

type TSkillsProps = {
  title: string;
  soft: string;
  technical: string;
};

// Dữ liệu kỹ năng kỹ thuật
const technicalSkills = [
  {
    title: "Programmings",
    description: "HTML, CSS, JavaScript, TypeScript, ReactJS",
  },
  {
    title: "Databases",
    description: "MongoDB, MySQL, SQLServer",
  },
  {
    title: "Librarys",
    description: "Bootstrap, Tailwind, Ant Design, React",
  },
  {
    title: "Tools",
    description: "VSCode, Git, PostMan, Figma, Vercel",
  },
];

// Dữ liệu kỹ năng mềm
const softSkills = [
  { title: "Team Work" },
  { title: "Communication" },
  { title: "Problem-Solving" },
];

const Skill: React.FC<TSkillsProps> = ({ title, soft, technical }) => {
  const [isTechnical] = useState(technicalSkills);
  const [isSoft] = useState(softSkills);

  return (
    <div id="skill" className="skill">
      <h1 className="skill-title">{title}</h1>
      <div className="skill-content">
        <div className="skill-content-technical">
          <h2>{technical}</h2>
          <div className="content-technical-group">
            {isTechnical.map((technical, index) => (
              <SkillItem
                key={index}
                title={technical.title}
                description={technical.description}
              />
            ))}
          </div>
        </div>
        <div className="skill-content-soft">
          <h2>{soft}</h2>
          <div className="content-soft-group">
            {isSoft.map((soft, index) => (
              <SkillItem key={index} title={soft.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
