import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../lib/Firebase/firebase_cfg";
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../lib/Firebase/firebase_cfg";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const usersCollectionRef = collection(db, "users");

  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      addDoc(usersCollectionRef, {
        email: email,
        password: password,
        id: auth.currentUser.uid,
        role: "user",
      });
    });
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
