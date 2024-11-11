import "./ResumeItem.scss"
import "./ResumeItem.media.scss"

const ResumeItem = () => {
    return (
      <div className="resumeitem">
        <object 
          className="resumeitem-cv" 
          data="https://asset.cloudinary.com/dpikkuzzk/d8123bdee30deb7e1ef9a6c7cd58b5ff"
          type="application/pdf" 
        />
      </div>
      );
}

export default ResumeItem;