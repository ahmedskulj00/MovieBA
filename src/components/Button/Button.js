import React from "react";
import "./buttonStyles.css";
import TrashCan from "../../assets/images/trash.png";
const Button = ({
  content,
  onClick,
  width,
  height,
  fontSize,
  deleteButton,
}) => {
  return (
    <div>
      {deleteButton ? (
        <button
          className="delete_button"
          onClick={onClick}
          style={{ width: width, height: height, fontSize: fontSize }}
        >
          <img src={TrashCan} alt="trash_can" className="trash_icon" />
        </button>
      ) : (
        <button
          onClick={onClick}
          className="main_button"
          style={{ width: width, height: height, fontSize: fontSize }}
        >
          {content}
        </button>
      )}
    </div>
  );
};

export default Button;
