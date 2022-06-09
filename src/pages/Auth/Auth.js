import React, { useState } from "react";
import Input from "../../components/Input/Input";
import "./authStyles.css";
import PopCornIcon from "../../assets/images/popcorn.png";
const Auth = () => {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="main_auth_container">
      <div className="inner_auth_container">
        <div className="auth_title_container">
          <img src={PopCornIcon} className="popcorn_icon" alt="popcorn_icon" />
          <h1 className="auth_title">Welcome to MovieBa!</h1>
        </div>

        <div className="auth_form_container">
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
