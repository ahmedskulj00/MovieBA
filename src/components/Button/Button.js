import React from "react";
import "./buttonStyles.css";

const Button = ({ content, onClick, width, height, fontSize }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="main_button"
        style={{ width: width, height: height, fontSize: fontSize }}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
