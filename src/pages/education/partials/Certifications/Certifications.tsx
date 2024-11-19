import "./Certifications.scss";
import "./Certifications.media.scss";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import CertificationCard from "./CertificationCard/CertificationCard";

type TCertificationsProps = {
  title: string;
};

interface TCertifications {
  id: string;
  color: string;
  img?: string;
  title?: string;
  person?: string;
  link?: string;
}

const Certifications: React.FC<TCertificationsProps> = ({ title }) => {
  const [isData, setIsData] = useState<TCertifications[] | null>(null);

  const { educationInfo } = useSelector((state: RootState) => state.education);

  useEffect(() => {
    if (educationInfo?.certifications?.length) {
      setIsData(educationInfo.certifications);
    } else {
      setIsData(null);
    }
  }, [educationInfo]);

  if (!isData) {
    return null;
  }

  return (
    <div className="educationcertification">
      <h1 className="educationcertification-title">{title}</h1>
      <div className="educationcertification-content">
        <CertificationCard />
      </div>
    </div>
  );
};

export default Certifications;
