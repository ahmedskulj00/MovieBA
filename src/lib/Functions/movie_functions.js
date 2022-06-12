import {
  collection,
  setDoc,
  deleteDoc,
  deleteField,
  updateDoc,
  getDoc,
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

const getAverageRating = (movieName) => {
  getDoc(doc(moviesCollectionRef, movieName)).then((document) => {
    const voters = document.data().voters;
    let sum = 0;
    for (let key in voters) {
      sum += voters[key];
    }

    let avg = sum / Object.keys(voters).length;

    updateDoc(doc(moviesCollectionRef, movieName), {
      rating: avg,
    });
  });
};

export const rateMovie = (movieName, rating, uuid) => {
  const path = "voters." + uuid;
  updateDoc(doc(moviesCollectionRef, movieName), {
    [path]: rating,
  });
  getAverageRating(movieName);
};

export const deleteRating = (movieName, uuid) => {
  const path = "voters." + uuid;
  updateDoc(doc(moviesCollectionRef, movieName), {
    [path]: deleteField(),
  });

  getAverageRating(movieName);
};
