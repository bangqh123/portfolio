import "./FormContact.scss";
import "./FormContact.media.scss";

import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
import Button from "../../buttons/Buttons/Buttons";
import InputForm from "../partials/InputForm/InputForm";

type TFormContactProps = {
  title: string;
  className: string;
};

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

const FormContact: React.FC<TFormContactProps> = ({ title, className }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h2>{title}</h2>
      <form className={className}>
        <InputForm
          type="text"
          name="fullName"
          title="full name"
          className="form-message-group"
          onChange={handleChange}
        />
        <InputForm
          type="email"
          name="email"
          title="email address"
          className="form-message-group"
          onChange={handleChange}
        />
        <InputForm
          type="text"
          name="message"
          title="message"
          className="form-message-group"
          onChange={handleChange}
        />
      </form>
      <Button
        icon={<GrSend />}
        title="Send Message"
        className="form-message-btn"
        onClick={handleSubmit}
      />
    </>
  );
};

export default FormContact;
