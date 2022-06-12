import React, { useEffect, useState } from "react";
import "./homeStyles.css";
import { useUserAuth } from "../../context/UserAuthContext";
import Navbar from "../../components/Navbar/Navbar";
import { getMovies } from "../../lib/Functions/movie_functions";
import MovieCard from "../../components/MovieCard/MovieCard";
const Home = () => {
  const { role, getUserRole } = useUserAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        setMovies(movies.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    getUserRole();
  }, [getUserRole]);

  return (
    <div>
      <Navbar role={role} />
      <div className="home_container">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movieImage={movie.imageUrl}
            movieName={movie.movieName}
            movieYear={movie.releaseYear}
            movieRating={movie.rating}
            movieGenre={movie.genre}
            movieDescription={movie.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
