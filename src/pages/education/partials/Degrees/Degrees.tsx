import "./Degrees.scss";
import "./Degrees.media.scss";

import React from "react";
import DegreesCard from "./DegreesCard/DegreesCard";

type TDegreesProps = {
  title: string;
};

const Degrees: React.FC<TDegreesProps> = ({ title }) => {
 

  return (
    <div className="educationdegrees">
      <h1 className="educationdegrees-title">
        {title}
      </h1>
      <div className="educationdegrees-content">
        <DegreesCard  />
      </div>
    </div>
  );
};

export default Degrees;
