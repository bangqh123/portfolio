import "./FormContact.scss";
import "./FormContact.media.scss";

import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import Button from "../../buttons/Buttons/Buttons";
import InputForm from "../partials/InputForm/InputForm";

type TFormContactProps = {
  title: string;
  className?: string;
};

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

const FormContact: React.FC<TFormContactProps> = ({ title, className = "" }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <fieldset className={`form-contact ${className}`}>
      <legend>{title}</legend>
      <form className="form-contact-content" onSubmit={handleSubmit}>
        <InputForm
          type="text"
          name="fullName"
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
