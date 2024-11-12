import "./Experience.scss";
import "./Experience.media.scss";

import React, { useEffect, useState } from "react";
import { RootState, AppDispatch } from "../../../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";

type TExperienceProps = {
  title: string;
  company: string;
  role: string;
};

interface TExperience {
  job: string;
  company: string;
  desc: string;
  role1: string;
  role2: string;
  start: string;
  end: string;
}

const Experience: React.FC<TExperienceProps> = ({ title, company, role }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isData, setIsData] = useState<TExperience[] | null>(null);

  const { userInfo } = useSelector((state: RootState) => state.portfolio);

  useEffect(() => {
    setIsData(userInfo?.[0].experience);
  }, [dispatch, userInfo]);

  return (
    <div id="experience" className="experience">
      <h1 className="experience-title">{title}</h1>
      <div className="experience-content">
        {isData?.map((item, index) => (
          <div key={index} className="experience-content-item">
            <div className="content-item-infor">
              <h2 className="item-infor-position">{item?.job}</h2>
              <h4 className="item-infor-company">
                {company}
                {item?.company}
              </h4>
              <p className="item-infor-technical">{item?.desc}</p>
              <div className="item-infor-role">
                {role}
                <ul>
                  <li>{item?.role1}</li>
                  <li>{item?.role2}</li>
                </ul>
              </div>
            </div>
            <div className="content-item-time">
              <p className="item-time-start">{item?.start}</p>
              <span>-</span>
              <p className="item-time-end">{item.end}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
