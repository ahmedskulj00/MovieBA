import React from "react";
import "./inputStyles.css";

const Input = ({
  type,
  placeholder,
  onChange,
  value,
  width,
  height,
  inputType,
}) => {
  return (
    <div>
      {inputType === "textarea" ? (
        <textarea
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="input_textarea"
          style={{ width: width, height: height }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="main_input"
          style={{ width: width, height: height }}
        />
      )}
    </div>
  );
};

export default Input;
