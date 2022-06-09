import React, { useState } from "react";
import Input from "../../components/Input/Input";
import "./authStyles.css";
import PopCornIcon from "../../assets/images/popcorn.png";
import Button from "../../components/Button/Button";
const Auth = () => {
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);

  const changeToLogin = () => {
    setLogin(true);
    setSignUp(false);
  };

  const changeToSignUp = () => {
    setLogin(false);
    setSignUp(true);
  };

  return (
    <div className="main_auth_container">
      <div className="inner_auth_container">
        <div className="auth_title_container">
          <img src={PopCornIcon} className="popcorn_icon" alt="popcorn_icon" />
          <h1 className="auth_title">Welcome to MovieBa!</h1>
        </div>

        <div className="auth_form_container">
          {login && (
            <div className="auth_login_container">
              <Input type="text" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button content="Login" />
              <p className="auth_question">
                Do you want to{" "}
                <button className="button_link" onClick={changeToSignUp}>
                  SignUp
                </button>{" "}
                ?
              </p>
              <div className="auth_guest_container">
                <button className="button_link">Join as a Guest</button>
              </div>
            </div>
          )}
          {signUp && (
            <div className="auth_signup_container">
              <Input type="text" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button content="SignUp" />
              <p className="auth_question">
                Do you want to{" "}
                <button className="button_link" onClick={changeToLogin}>
                  Login
                </button>{" "}
                ?
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
