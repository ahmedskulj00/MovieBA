import React from "react";
import { useState } from "react";
import { useUserAuth } from "./context/UserAuthContext";

const Test = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password);
  };

  return (
    <div>
      {" "}
      <input type="text" placeholder="Enter name" />
      <input type="text" placeholder="Enter name" />
      <input type="text" placeholder="Enter name" />
      <input type="text" placeholder="Enter name" />
      <input type="text" placeholder="Enter name" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Test;
