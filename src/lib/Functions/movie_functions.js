import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  doc,
} from "@firebase/firestore";
import { db } from "../Firebase/firebase_cfg";

export const addMovie = (movieName, imageUrl, description, rating, genre) => {
  const moviesCollectionRef = collection(db, "movies");
  addDoc(moviesCollectionRef, {
    movieName: movieName,
    imageUrl: imageUrl,
    description: description,
    rating: 0,
    genre: genre,
  });
};
