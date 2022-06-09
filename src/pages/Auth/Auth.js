import React, { useState } from "react";
import Input from "../../components/Input/Input";
import "./authStyles.css";
import PopCornIcon from "../../assets/images/popcorn.png";
import Button from "../../components/Button/Button";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn, signUp } = useUserAuth();
  const navigate = useNavigate();

  const changeToLogin = () => {
    setIsLogin(true);
    setIsSignUp(false);
  };

  const changeToSignUp = () => {
    setIsLogin(false);
    setIsSignUp(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      setIsSignUp(false);
      setIsLogin(true);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div className="main_auth_container">
      <div className="inner_auth_container">
        <div className="auth_title_container">
          <img src={PopCornIcon} className="popcorn_icon" alt="popcorn_icon" />
          <h1 className="auth_title">Welcome to MovieBa!</h1>
        </div>

        <div className="auth_form_container">
          {isLogin && (
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
                <button className="button_link">Join as a Guest</button>
              </div>
            </div>
          )}
          {isSignUp && (
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
              <Button content="SignUp" onClick={handleSignUp} />
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
