import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./registrationStyles.css";

const Registration = ({
  setEmail,
  setPassword,
  error,
  handleSignUp,
  changeToLogin,
}) => {
  return (
    <div className="auth_signup_container">
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
      <Button content="SignUp" onClick={handleSignUp} />
      <p className="auth_question">
        Do you want to{" "}
        <button className="button_link" onClick={changeToLogin}>
          Login
        </button>{" "}
        ?
      </p>
    </div>
  );
};

export default Registration;
