import React, { useState } from "react";
import Input from "../../components/Input/Input";
import "./authStyles.css";
import Button from "../../components/Button/Button";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import AuthImage from "../../assets/images/authimage.jpg";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn, signUp, guestLogin, user } = useUserAuth();
  const navigate = useNavigate();

  console.log(user);
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

  const handleGuestLogin = async () => {
    try {
      await guestLogin();
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div className="main_auth_container">
      <div className="inner_auth_container">
        <div className="left_auth_container">
          <img src={AuthImage} alt="auth" className="auth_image" />
        </div>
        <div className="right_auth_container">
          <div className="auth_title_container">
            <h1 className="auth_title">Welcome to MovieBA!</h1>
          </div>

          <div className="auth_form_container">
            {isLogin && (
              <Login
                setEmail={setEmail}
                setPassword={setPassword}
                error={error}
                handleGuestLogin={handleGuestLogin}
                handleLogin={handleLogin}
                changeToSignUp={changeToSignUp}
              />
            )}
            {isSignUp && (
              <Registration
                setEmail={setEmail}
                setPassword={setPassword}
                error={error}
                handleSignUp={handleSignUp}
                changeToLogin={changeToLogin}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
