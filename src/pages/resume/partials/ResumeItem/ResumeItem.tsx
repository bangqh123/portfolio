import "./ResumeItem.scss"
import "./ResumeItem.media.scss"

const ResumeItem = () => {
    return (
      <div className="resumeitem">
        <object 
          className="resumeitem-cv" 
          data="https://res-console.cloudinary.com/dpikkuzzk/thumbnails/v1/image/upload/v1731346138/UUhfQmFuZ19Gcm9udEVuZF9hdm94d3U=/as_is/QH_Bang_FrontEnd_avoxwu"
          type="application/pdf" 
        />
      </div>
      );
}

export default ResumeItem;