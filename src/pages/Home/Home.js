import React, { useEffect } from "react";
import "./homeStyles.css";
import { useUserAuth } from "../../context/UserAuthContext";
import Navbar from "../../components/Navbar/Navbar";
const Home = () => {
  const { role, getUserRole } = useUserAuth();

  useEffect(() => {
    getUserRole();
  }, [getUserRole]);

  return (
    <div>
      <Navbar role={role} />
    </div>
  );
};

export default Home;
