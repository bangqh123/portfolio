import "./Experience.scss"
import "./Experience.media.scss"

import React from "react"

type TExperienceProps = {
  title: string,
  company: string,
  role: string,
}

const Experience: React.FC<TExperienceProps> = ({title, company, role}) => {
    return (
        <div id="experience" className="experience">
          <h1 className='experience-title'>{title}</h1>
          <div className='experience-content'>
            <div className='experience-content-item'>
              <div className='content-item-infor'>
                <h2 className='item-infor-position'>Front end developer</h2>
                <h4 className='item-infor-company'>{company}: LikeLion</h4>
                <p className='item-infor-technical'>HTML & CSS, JavaScript, TypeScript, ReactJS</p>
                <div className='item-infor-role'>
                  {role}
                  <ul>
                    <li>Programme outsourcing projects</li>
                    <li>Create coding frames and design database based on project descriptions</li>
                  </ul>
                </div>
              </div>
              <div className='content-item-time'>
                <p className='item-time-start'>Jun 2024</p>
                <span>-</span>
                <p className='item-time-end'>Nov 2024</p>
              </div>
            </div>
            <div className='experience-content-item'>
              <div className='content-item-infor'>
                <h2 className='item-infor-position'>Front end developer</h2>
                <h4 className='item-infor-company'>{company}: IVS(Can Tho)</h4>
                <p className='item-infor-technical'>HTML & CSS, PhP(Laravel), MySQL</p>
                <div className='item-infor-role'>
                  {role}
                  <ul>
                    <li>Programme outsourcing projects</li>
                    <li>Create coding frames and design database based on project descriptions</li>
                  </ul>
                </div>
              </div>
              <div className='content-item-time'>
                <p className='item-time-start'>Nov 2021</p>
                <span>-</span>
                <p className='item-time-end'>Apr 2022</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Experience;