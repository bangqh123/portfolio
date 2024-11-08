import "./NotFound.scss"

import React from "react";
import Buttons from "../../components/buttons/Buttons/Buttons";
import { IMAGES } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack= () => {
    navigate(-1);
  };

    return (
      <div className="notfound">
        <div className="notfound-error">
            <img src={IMAGES.ERROR} className="notfound-error-img" alt="Not Found"/>
        </div>
        <div className="notfound-text">
            <h1>Oops!</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Buttons title="Go Back" className="notfound-text-btn" onClick={handleBack}/>
        </div>
      </div>
    );
  };
  
  export default NotFoundPage;