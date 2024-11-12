import "./ProjectItem.scss";
import "./ProjectItem.media.scss";

import { RootState } from "../../../../redux/store/store";
import { useSelector } from "react-redux";
import Buttons from "../../../../components/buttons/Buttons/Buttons";
import { GoProjectSymlink } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

interface TProject {
  img: string;
  name: string;
  description: string;
  git: string;
  demo: string;
}

const ProjectItem = () => {
  const projectInfo = useSelector(
    (state: RootState) => state.project.projectInfo
  ) as TProject[];

  return (
    <div className="project-cards">
      {projectInfo?.map((item, index) => (
        <div key={index} className="card">
          <div className="card-img">
            <img src={item?.img} alt="Demo picture" />
          </div>
          <div className="card-content">
            <div className="card-content-header">
              <div className="content-header-name">{item.name}</div>
              <div className="content-header-describe">{item.description}</div>
            </div>
            <div className="card-content-btn">
              <Buttons
                title="Git Hub"
                className="btn-git"
                icon={<FaGithub />}
                newTab={true}
                link={item.git}
              />
              <Buttons
                title="Demo"
                className="btn-demo"
                icon={<GoProjectSymlink />}
                newTab={true}
                link={item.demo}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectItem;
