import "./ResumeItem.scss"
import "./ResumeItem.media.scss"

const ResumeItem = () => {
    return (
      <div className="resumeitem">
        <object 
          className="resumeitem-cv" 
          data="http://localhost:1337/uploads/QH_Bang_Front_End_204604a0fa.pdf" 
          type="application/pdf" 
        />
      </div>
      );
}

export default ResumeItem;