import "./InputForm.scss";
import "./InputForm.media.scss";

import React from "react";

type TInputFormProps = {
  type: "text" | "email";
  title: string;
  className?: string;
  name: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputForm: React.FC<TInputFormProps> = ({
  type,
  title,
  className,
  name,
  required = true,
  onChange
}) => {

  return (
    <div className={`form-group ${className}`}>
      <input
        type={type}
        className="form-input"
        name={name}
        id={name}
        placeholder=""
        required={required}
        onChange={onChange}
      />
      <label htmlFor={name} className="form-label">
        {title}
      </label>
    </div>
  );
};

export default InputForm;
