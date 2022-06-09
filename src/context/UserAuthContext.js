import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../lib/Firebase/firebase_cfg";
import { collection, setDoc, doc, getDoc } from "@firebase/firestore";
import { db } from "../lib/Firebase/firebase_cfg";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const usersCollectionRef = collection(db, "users");

  const [user, setUser] = useState({});
  const [role, setRole] = useState("");

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      setDoc(doc(usersCollectionRef, auth.currentUser.uid), {
        email: email,
        id: auth.currentUser.uid,
        role: "user",
      });
    });
  }

  // get the role of the logged in user
  function getUserRole() {
    return getDoc(doc(usersCollectionRef, auth.currentUser.uid)).then((doc) => {
      setRole(doc.data().role);
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
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, getUserRole, role }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
