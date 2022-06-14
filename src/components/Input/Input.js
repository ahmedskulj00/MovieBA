import React from "react";
import "./inputStyles.css";

const Input = ({ type, placeholder, onChange, value, width, height }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="main_input"
        style={{ width: width, height: height }}
      />
    </div>
  );
};

export default Input;
