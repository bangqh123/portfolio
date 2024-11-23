import "./ProjectItem.scss";
import "./ProjectItem.media.scss";

import { RootState } from "../../../../../redux/store/store";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import Buttons from "../../../../../components/buttons/Buttons/Buttons";

interface TProject {
  id: string;
  img: string;
  name: string;
  git: string;
  demo: string;
  description: string;
  technicals: {
    name: string;
    icon: string;
  }[];
}

const ProjectItem = () => {
  const [isData, setIsData] = useState<TProject[]>([]);
  const [isAnimation, setIsAnimation] = useState<{ [key: string]: boolean }>({});
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const { projectInfo } = useSelector((state: RootState) => state.project);

  useEffect(() => {
    const handleScroll = () => {
      itemsRef.current.forEach((itemRef, idx) => {
        if (itemRef) {
          const isVisible = itemRef.getBoundingClientRect().top <= window.innerHeight;
          setIsAnimation((prev) => ({
            ...prev,
            [isData[idx]?.id]: isVisible,
          }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isData]);

  useEffect(() => {
    if (projectInfo?.projects) {
      setIsData(projectInfo.projects);
    }
  }, [projectInfo]);

  return (
    <>
      {isData?.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => (itemsRef.current[index] = el!)}
          className={`card ${isAnimation[item.id] ? "animation" : ""}`}
        >
          <div className="card-img">
            <img src={item.img} alt={`${item.name} preview`} />
          </div>
          <div className="card-content">
            <div className="card-content-info">
              <div className="info-header">
                <h1 className="info-header-name">{item.name}</h1>
                <div className="info-header-technicals">
                  {item?.technicals?.map((iconData, i) => (
                    <div key={i} className="technical">
                      <img src={iconData.icon} alt={iconData.name} />
                      <span>{iconData.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="info-desc">{item.description}</div>
            </div>
            <div className="card-content-button">
              <Buttons
                title="GitHub"
                className="btn-git"
                icon={<FaGithub />}
                newTab={true}
                link={item.git}
              />
              {item?.demo ? 
                (
                  <Buttons
                    title="Demo"
                    className="btn-demo"
                    icon={<GoProjectSymlink />}
                    newTab={true}
                    link={item.demo}
                  />
                ) : null
              }
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectItem;
