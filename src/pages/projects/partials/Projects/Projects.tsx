import "./Projects.scss"
import "./Project.media.scss"

import React from "react"
import ProjectItem from "./ProjectItem/ProjectItem"

const Project: React.FC = () => {
    return (
        <div className="project">
            <ProjectItem />    
        </div>
    )
}

export default Project