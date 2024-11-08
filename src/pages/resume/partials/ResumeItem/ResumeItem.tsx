import "./ResumeItem.scss"
import "./ResumeItem.media.scss"

const ResumeItem = () => {
    return (
      <div className="resumeitem">
        <object className="resumeitem-cv" data="/QH_Bang_FrontEnd.pdf" type="application/pdf" />
      </div>
      );
}

export default ResumeItem;