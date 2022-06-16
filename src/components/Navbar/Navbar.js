import React, { useState, useEffect, useRef } from "react";
import Button from "../Button/Button";
import "./navbarStyles.css";
import Plus from "../../assets/images/add.png";
import UserIcon from "../../assets/images/user.png";
import LogoutIcon from "../../assets/images/exit.png";
import LoginIcon from "../../assets/images/key.png";
import Popcorn from "../../assets/images/popcorn.png";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import CustomModal from "../Modal/CustomModal";
import AddMovie from "../AddMovie/AddMovie";

const Navbar = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const navRef = useRef();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main_navbar_container">
      <div className="inner_navbar_container">
        <div className="navbar_logo_container">
          <div className="navbar_logo">
            <h1>movieba</h1>
          </div>
        </div>
        <div
          className={
            role === "admin"
              ? "navbar_user_options navbar_user_options_admin"
              : "navbar_user_options"
          }
        >
          {role === "admin" && (
            <div>
              <button className="add_movie_button" onClick={openModal}>
                <img src={Plus} className="plus_icon" alt="plus_icon" />
              </button>
              <CustomModal
                modalIsOpen={isModalOpen}
                closeModal={closeModal}
                width="40rem"
                height="34rem"
              >
                <AddMovie closeModal={closeModal} />
              </CustomModal>
            </div>
          )}
          <div className="navbar_user_profile_container">
            <button
              className="navbar_user_button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={UserIcon}
                className="navbar_user_icon"
                alt="navbar_user_icon"
              />
            </button>
            {isOpen && (
              <div className="dropdown_container" ref={navRef}>
                <div className="dropdown_inner_container">
                  <p>Choose your option:</p>
                  {/* <Button
                    content={user.isAnonymous ? "Login" : "Logout"}
                   
                    width="4rem"
                    height="2rem"
                    fontSize="0.9rem"
                  /> */}
                  <div
                    className="dropdown_button_container"
                    onClick={handleLogout}
                  >
                    <img
                      src={user.isAnonymous ? LoginIcon : LogoutIcon}
                      alt="dropdown_icon"
                      className="dropdown_icon"
                    />
                    <button className="dropdown_button">
                      {user.isAnonymous ? "Login" : "Logout"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
