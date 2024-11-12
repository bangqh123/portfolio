import "./ResumeItem.scss";
import "./ResumeItem.media.scss";

import React, { useEffect, useState } from "react";
import { RootState, AppDispatch } from "../../../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";

interface TResumeItem {
  cv: string;
}

const ResumeItem: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isData, setIsData] = useState<TResumeItem>();

  const { userInfo } = useSelector((state: RootState) => state.portfolio);

  useEffect(() => {
    setIsData(userInfo?.[0].resume);
  }, [dispatch, userInfo]);

  return (
    <div className="resumeitem">
      <object
        className="resumeitem-cv"
        data={isData?.cv}
        type="application/pdf"
      />
    </div>
  );
};

export default ResumeItem;
