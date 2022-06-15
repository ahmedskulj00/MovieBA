import React, { useState } from "react";
import "./buttonStyles.css";
import TrashCan from "../../assets/images/trash.png";
import TrashCanInvert from "../../assets/images/trash_invert.png";
const Button = ({
  content,
  onClick,
  width,
  height,
  fontSize,
  deleteButton,
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      {deleteButton ? (
        <button
          className="delete_button"
          onClick={onClick}
          style={{ width: width, height: height, fontSize: fontSize }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isHover ? (
            <img src={TrashCanInvert} alt="trash_can" className="trash_icon" />
          ) : (
            <img src={TrashCan} alt="trash_can" className="trash_icon" />
          )}
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
