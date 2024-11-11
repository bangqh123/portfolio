import "./ResumeItem.scss"
import "./ResumeItem.media.scss"
import { FILE } from "../../../../assets/file";

const ResumeItem = () => {
    return (
      <div className="resumeitem">
        <object 
          className="resumeitem-cv" 
          data={FILE.CV}
          type="application/pdf" 
        />
      </div>
      );
}

export default ResumeItem;