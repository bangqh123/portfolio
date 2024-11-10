import LayoutPage from "../../layouts/LayoutPage/LayoutPage";
import Project from "./partials/Projects/Projects";
import { PROPS } from "../../configs/constants/projectpage";

const ProjectPage = () => {
  return (
    <LayoutPage>
      <Project {...PROPS.PROJECT}/>
    </LayoutPage>
  )
};

export default ProjectPage;