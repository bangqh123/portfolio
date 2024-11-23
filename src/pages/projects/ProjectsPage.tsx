import "./ProjectsPage.scss"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../redux/slices/projectsSlice";
import { RootState, AppDispatch } from "../../redux/store/store";

import LayoutPage from "../../layouts/LayoutPage/LayoutPage";
import Hero from "./partials/Hero/Hero";
import Project from "./partials/Projects/Projects";
import { PROPS } from "../../configs/constants/projectpage";

const ProjectPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { projectInfo } = useSelector(
    (state: RootState) => state.project
  );

  useEffect(() => {
    if (!projectInfo) {
      dispatch(fetchProjects());
    }
  }, [dispatch, projectInfo]);

  return (
    <LayoutPage>
      <div className="projects">
        <Hero {...PROPS.HERO}/>
        <Project />
      </div>
    </LayoutPage>
  )
};

export default ProjectPage;