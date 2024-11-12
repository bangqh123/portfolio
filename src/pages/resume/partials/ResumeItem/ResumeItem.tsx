import "./ResumeItem.scss"
import "./ResumeItem.media.scss"

import CV from "../../../../assets/file/QH_Bang_FrontEnd.pdf"

const ResumeItem = () => {
    return (
      <div className="resumeitem">
        <object 
          className="resumeitem-cv" 
          data={CV}
          type="application/pdf" 
        />
      </div>
      );
}

export default ResumeItem;