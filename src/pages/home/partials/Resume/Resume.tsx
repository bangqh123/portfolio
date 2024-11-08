import "./Resume.scss"
import "./Resume.media.scss"

const Resume = () => {
    return (
        <div id="resume" className="resume">
          <h1 className='resume-title'>Resume</h1>
          <object className="resume-cv" data="/QH_Bang_FrontEnd.pdf" type="application/pdf" />
        </div>
      );
}

export default Resume;