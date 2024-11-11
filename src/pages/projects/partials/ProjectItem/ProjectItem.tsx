import "./ProjectItem.scss";
import "./ProjectItem.media.scss";

import React from "react";
import Buttons from "../../../../components/buttons/Buttons/Buttons";
import { GoProjectSymlink } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

const ProjectItem: React.FC = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://asset.cloudinary.com/dpikkuzzk/72702faa5402469b6a1c31df43106ff4" alt="Demo picture" />
      </div>
      <div className="card-content">
        <div className="card-content-header">
          <div className="content-header-name">Shop</div>
          <div className="content-header-describe">Html & Css, JavaScript</div>
        </div>
        <div className="card-content-btn">
          <Buttons
            title="Git Hub"
            className="btn-git"
            icon={<FaGithub />}
            newTab={true}
            link="https://github.com/bangqh123/Shop"
          />
          <Buttons
            title="Demo"
            className="btn-demo"
            icon={<GoProjectSymlink />}
            newTab={true}
            link="https://bangqh123.github.io/Shop/"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
