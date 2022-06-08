import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5z1wV9CISnSM_B8NgYO0sRckzAShurCY",
  authDomain: "graduation-movie-app.firebaseapp.com",
  projectId: "graduation-movie-app",
  storageBucket: "graduation-movie-app.appspot.com",
  messagingSenderId: "764688283212",
  appId: "1:764688283212:web:96a6d9f6d1c5298227a6e9",
  measurementId: "G-G8TYHH2KJF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
