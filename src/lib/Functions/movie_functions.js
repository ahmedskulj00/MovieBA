import {
  collection,
  setDoc,
  deleteDoc,
  updateDoc,
  addDoc,
  doc,
} from "@firebase/firestore";
import { db } from "../Firebase/firebase_cfg";

export const moviesCollectionRef = collection(db, "movies");

export const addMovie = (
  movieName,
  imageUrl,
  description,
  genre,
  releaseYear
) => {
  setDoc(doc(moviesCollectionRef, movieName), {
    movieName: movieName,
    imageUrl: imageUrl,
    description: description,
    genre: genre,
    releaseYear: releaseYear,
    rating: 0,
    voters: {},
  });
};

export const deleteMovie = (movieName) => {
  deleteDoc(doc(moviesCollectionRef, movieName));
};

export const rateMovie = (movieName, rating, uuid) => {
  const path = "voters." + uuid;
  updateDoc(doc(moviesCollectionRef, movieName), {
    [path]: rating,
  });
};

export const updateMovieRating = (movieName, rating) => {
  updateDoc(doc(moviesCollectionRef, movieName), {
    rating: rating,
  });
};
