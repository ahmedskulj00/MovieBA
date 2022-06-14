import React, { useEffect, useState } from "react";
import "./homeStyles.css";
import { useUserAuth } from "../../context/UserAuthContext";
import Navbar from "../../components/Navbar/Navbar";
import { moviesCollectionRef } from "../../lib/Functions/movie_functions";
import MovieCard from "../../components/MovieCard/MovieCard";
import { onSnapshot } from "@firebase/firestore";
const Home = () => {
  const { role, getUserRole, user } = useUserAuth();
  const [moviesNew, setMoviesNew] = useState([]);

  useEffect(() => {
    onSnapshot(moviesCollectionRef, (snapshot) => {
      setMoviesNew(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    getUserRole();
  }, [getUserRole]);

  return (
    <div>
      <Navbar role={role} />
      <div className="home_container">
        <div className="home_grid_container">
          {moviesNew.map((movie, index) => (
            <MovieCard
              key={index}
              movieImage={movie.imageUrl}
              movieName={movie.movieName}
              movieYear={movie.releaseYear}
              movieRating={parseFloat(movie.rating).toFixed(1)}
              movieGenre={movie.genre}
              movieDescription={movie.description}
              movieVoters={movie.voters}
              role={role}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
