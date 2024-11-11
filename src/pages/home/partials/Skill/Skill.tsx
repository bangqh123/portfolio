import "./Skill.scss";

import React, { useEffect, useState } from "react";
import { RootState, AppDispatch } from "../../../../redux/store/store";
import { fetchPortfolio } from "../../../../redux/slices/portfolioSlices";
import { useDispatch, useSelector } from "react-redux";
import SkillItem from "./SkillItem/SkillItem";

type TSkillsProps = {
  title: string;
  soft: string;
  technical: string;
};

interface TSoft {
  name: string;
}

interface TTechnical {
  name: string;
  desc: string;
}

const Skill: React.FC<TSkillsProps> = ({ title, soft, technical }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isTechnical, setIsTechnical] = useState<TTechnical[] | null>(null);
  const [isSoft, setIsSoft] = useState<TSoft[] | null>(null);

  const { userInfo } = useSelector((state: RootState) => state.portfolio);

  useEffect(() => {
    if (!userInfo?.[0]) {
      dispatch(fetchPortfolio());
    } else {
      setIsTechnical(userInfo?.[0].skill.technical);
      setIsSoft(userInfo?.[0].skill.soft);
    }
  }, [dispatch, userInfo]);

  return (
    <div id="skill" className="skill">
      <h1 className="skill-title">{title}</h1>
      <div className="skill-content">
        <div className="skill-content-technical">
          <h2>{technical}</h2>
          <div className="content-technical-group">
            {isTechnical?.map((item, index) => (
              <SkillItem
                key={index}
                title={item?.name}
                description={item?.desc}
              />
            ))}
          </div>
        </div>
        <div className="skill-content-soft">
          <h2>{soft}</h2>
          <div className="content-soft-group">
            {isSoft?.map((item, index) => (
              <SkillItem key={index} title={item?.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
