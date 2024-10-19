import './Experience.scss'
import './Experience.media.scss'

import React from 'react';

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
                    <li>dsds</li>
                    <li>dsds</li>
                    <li>dsds</li>
                    <li>dsds</li>
                  </ul>
                </div>
              </div>
              <div className='content-item-time'>
                <p className='item-time-start'>From: <strong>Jun 2024</strong></p>
                <span>-</span>
                <p className='item-time-end'>To: <strong>Present</strong></p>
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
                    <li>dsds</li>
                    <li>dsds</li>
                    <li>dsds</li>
                    <li>dsds</li>
                  </ul>
                </div>
              </div>
              <div className='content-item-time'>
                <p className='item-time-start'>From: <strong>Nov 2021</strong></p>
                <span>-</span>
                <p className='item-time-end'>To: <strong>Apr 2022</strong></p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Experience;