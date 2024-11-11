import "./Education.scss";
import "./Education.media.scss";

import React, { useEffect, useState } from "react";
import { RootState, AppDispatch } from "../../../../redux/store/store";
import { fetchPortfolio } from "../../../../redux/slices/portfolioSlices";
import { useDispatch, useSelector } from "react-redux";

type TEducationProps = {
  title: string;
  schoolName: string;
  major: string;
  subjects: string;
  gpa: string;
  start: string;
  end: string;
};

interface TEducation {
  id: number;
  school_name: string;
  major: string;
  desc: string;
  gpa: string;
  start: string;
  end: string;
}

const Education: React.FC<TEducationProps> = ({ title, major, gpa }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isData, setIsData] = useState<TEducation[] | null>(null);

  const { userInfo } = useSelector((state: RootState) => state.portfolio);

  useEffect(() => {
    if (!userInfo?.[0]) {
      dispatch(fetchPortfolio());
    } else {
      setIsData(userInfo?.[0].education);
    }
  }, [dispatch, userInfo]);

  return (
    <div id="education" className="education">
      <h1 className="education-title">{title}</h1>
      <div className="education-school">
        {isData?.map((item, index) => (
          <div key={index} className="education-school-item">
            <div className="school-item-infor">
              <h2 className="item-infor-name">{item.school_name}</h2>
              <h3 className="item-infor-major">
                {major}
                {item.major}
              </h3>
              <p className="item-infor-subject">{item.desc}</p>
              <span className="item-infor-gpa">
                {gpa}
                {item.gpa}
              </span>
            </div>
            <div className="school-item-time">
              <p className="item-time-start">{item.start}</p>
              <span>-</span>
              <p className="item-time-end">{item.end}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
