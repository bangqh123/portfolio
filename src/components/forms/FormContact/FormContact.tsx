import "./FormContact.scss";
import "./FormContact.media.scss";

import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import Button from "../../buttons/Buttons/Buttons";
import InputForm from "../partials/InputForm/InputForm";
import ContactUserService from "../../../redux/api/apiContact";
import Notify from "../../notifications/notifications";

type TFormContactProps = {
  title: string;
  className?: string;
};

type FormData = {
  fullname: string;
  email: string;
  subject: string;
  message: string;
};

const FormContact: React.FC<TFormContactProps> = ({ title, className = "" }) => {
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"success" | "error">("success");
  const [message, setMessage] = useState<string>("");
  const [showNotification, setShowNotification] = useState<boolean>(false); // New state to control notification

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await ContactUserService.postContact(formData);
      console.log("Success:", response);
      setStatus("success");
      setMessage("Your sent successfully!");
      setShowNotification(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setMessage("An error occurred, please try again.");
      setShowNotification(true);
    }
  };

  return (
    <fieldset className={`form-contact ${className}`}>
      {showNotification && <Notify status={status} message={message} />}
      <legend>{title}</legend>
      <form className="form-contact-content" onSubmit={handleSubmit}>
        <InputForm
          type="text"
          name="fullname"
          title="Full Name"
          onChange={handleChange}
        />
        <InputForm
          type="email"
          name="email"
          title="Email Address"
          onChange={handleChange}
        />
        <InputForm
          type="text"
          name="subject"
          title="Subject"
          onChange={handleChange}
        />
        <InputForm
          type="text"
          name="message"
          title="Message"
          onChange={handleChange}
        />
        <Button
          icon={<GrSend />}
          title="Send Message"
          className="form-contact-btn"
        />
      </form>
    </fieldset>
  );
};

export default FormContact;
