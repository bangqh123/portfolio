import "./Projects.scss"
import "./Project.media.scss"

import React from "react"
import ProjectItem from "../ProjectItem/ProjectItem"

type TProjectProps = {
    title: string,
    description: string
}

const Project: React.FC<TProjectProps> = ( { title, description } ) => {
    return (
        <div className="project">
            <h1>{title}</h1>
            <p>{description}</p>
            <ProjectItem />    
        </div>
    )
}

export default Project