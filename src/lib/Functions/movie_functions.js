import { useEffect, useState } from "react";
import {
  collection,
  setDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  doc,
} from "@firebase/firestore";
import { db } from "../Firebase/firebase_cfg";

const moviesCollectionRef = collection(db, "movies");

export const addMovie = (movieName, imageUrl, description, genre) => {
  setDoc(doc(moviesCollectionRef, movieName), {
    movieName: movieName,
    imageUrl: imageUrl,
    description: description,
    genre: genre,
    rating: 0,
    voters: {},
  });
};

export const deleteMovie = (movieName) => {
  deleteDoc(doc(moviesCollectionRef, movieName));
};

export const rateMovie = (movieName, rating, uuid) => {
  updateDoc(doc(moviesCollectionRef, movieName), {
    voters: {
      [uuid]: rating,
    },
  });
};

export const updateMovieRating = (movieName, rating) => {
  updateDoc(doc(moviesCollectionRef, movieName), {
    rating: rating,
  });
};
