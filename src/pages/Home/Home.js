import React, { useEffect } from "react";
import "./homeStyles.css";
import { useUserAuth } from "../../context/UserAuthContext";
const Home = () => {
  const { role, getUserRole } = useUserAuth();

  useEffect(() => {
    getUserRole();
  }, [getUserRole]);

  console.log(role);

  return <div>{role === "user" ? "User" : "Siuu"}</div>;
};

export default Home;
