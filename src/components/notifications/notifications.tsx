import "./notification.scss"

import React from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type TNotifyProps = {
  status: "success" | "error";
  message: string;
};

const Notify: React.FC<TNotifyProps> = ({ status, message }) => {
  const showToast = () => {
    switch (status) {
      case "success":
        toast.success(message);
        break;
      default:
        toast.error(message); 
        break;
    }
  };

  React.useEffect(() => {
    showToast();
  }, [status, message]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        transition={Flip}
      />
    </div>
  );
};

export default Notify;
