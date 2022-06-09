import React from "react";
import "./inputStyles.css";

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="main_input"
      />
    </div>
  );
};

export default Input;
