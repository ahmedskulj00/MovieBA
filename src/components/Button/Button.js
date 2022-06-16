import React, { useState } from "react";
import "./buttonStyles.css";
import TrashCan from "../../assets/images/trash.png";
import TrashCanInvert from "../../assets/images/trash_invert.png";
import LogoutIcon from "../../assets/images/exit.png";
import LoginIcon from "../../assets/images/key.png";
import { useUserAuth } from "../../context/UserAuthContext";
const Button = ({
  content,
  onClick,
  width,
  height,
  fontSize,
  deleteButton,
  dropdownButton,
}) => {
  const [isHover, setIsHover] = useState(false);
  const { user } = useUserAuth();
  return (
    <>
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
      ) : dropdownButton ? (
        <div className="dropdown_button_container" onClick={onClick}>
          <img
            src={user.isAnonymous ? LoginIcon : LogoutIcon}
            alt="dropdown_icon"
            className="dropdown_icon"
          />
          <button className="dropdown_button">{content}</button>
        </div>
      ) : (
        <button
          onClick={onClick}
          className="main_button"
          style={{ width: width, height: height, fontSize: fontSize }}
        >
          {content}
        </button>
      )}
    </>
  );
};

export default Button;
