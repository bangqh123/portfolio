import "./InputForm.scss";
import "./InputForm.media.scss";

import React from "react";

type TInputFormProps = {
  type: string;
  title: string;
  className?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputForm: React.FC<TInputFormProps> = ({
  type,
  title,
  className,
  name,
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
        required
        onChange={onChange}
      />
      <label htmlFor={name} className="form-label">
        {title}
      </label>
    </div>
  );
};

export default InputForm;
