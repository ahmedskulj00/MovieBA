// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export default app;
const analytics = getAnalytics(app);
