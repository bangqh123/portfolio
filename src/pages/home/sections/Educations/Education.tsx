import './Education.scss'
import './Education.media.scss'

import React from 'react';

type TEducationProps = {
  title: string,
  schoolName: string,
  major: string,
  subjects: string,
  gpa: string,
  start: string,
  end: string,
}

const Education: React.FC<TEducationProps> = ({title, schoolName, major, subjects,gpa, start,end}) => {
    return (
        <div id="education" className="education">
          <h1 className='education-title'>{title}</h1>
          <div className='education-school'>
            <div className='education-school-item'>
              <div className='school-item-infor'>
                <h2 className='item-infor-name'>{schoolName}</h2>
                <h3 className='item-infor-major'>{major}</h3>
                <p className='item-infor-subject'>{subjects}</p>
                <span className='item-infor-gpa'>{gpa}</span>
              </div>
              <div className='school-item-time'>
                <p className='item-time-start'>{start}</p>
                <span>-</span>
                <p className='item-time-end'>{end}</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Education;