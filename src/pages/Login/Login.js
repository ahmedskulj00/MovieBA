import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./loginStyles.css";

const Login = ({
  setEmail,
  setPassword,
  error,
  handleGuestLogin,
  handleLogin,
  changeToSignUp,
}) => {
  return (
    <div className="auth_login_container">
      <Input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="error_container">
        <p className="error">{error}</p>
      </div>
      <Button content="Login" onClick={handleLogin} />

      <p className="auth_question">
        Do you want to{" "}
        <button className="button_link" onClick={changeToSignUp}>
          SignUp
        </button>{" "}
        ?
      </p>
      <div className="auth_guest_container">
        <button className="button_link" onClick={handleGuestLogin}>
          Join as a Guest
        </button>
      </div>
    </div>
  );
};

export default Login;
