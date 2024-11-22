import "./Loadings.scss";

import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

type LoadingProps = {
  isLoading: boolean
};

const Loading: React.FC<LoadingProps> = ( { isLoading } ) => {
  const [loading, setLoading] = useState(isLoading)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <div className="loading-container">
      <RingLoader size={80} color="#001c55" loading={loading} />
    </div>
  );
};

export default Loading;
