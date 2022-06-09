import React from "react";
import "./buttonStyles.css";

const Button = ({ content, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="main_button">
        {content}
      </button>
    </div>
  );
};

export default Button;
