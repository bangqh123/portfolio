import './Education.scss'
import './Education.media.scss'

const Education = () => {
    return (
        <div id="education" className="education">
          <h1 className='education-title'>Education</h1>
          <div className='education-school'>
            <div className='education-school-item'>
              <div className='school-item-infor'>
                <h2 className='item-infor-name'>University of Greenwich (Can Tho)</h2>
                <h3 className='item-infor-major'>computer science</h3>
                <p className='item-infor-subject'>HTMl & CSS, Java, PhP, C#</p>
                <span className='item-infor-gpa'>GPA:3.55/4</span>
              </div>
              <div className='school-item-time'>
                <p className='item-time-start'>From: Jul 2018</p>
                <span>-</span>
                <p className='item-time-end'>To: Jul 2023</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Education;