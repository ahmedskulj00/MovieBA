import React, { useState, useEffect } from "react";
import "./movieModalStyles.css";
import Star from "../../assets/images/star.png";
import Button from "../Button/Button";
import { useUserAuth } from "../../context/UserAuthContext";
import { deleteRating, rateMovie } from "../../lib/Functions/movie_functions";
const MovieModal = ({
  movieImage,
  movieName,
  movieYear,
  movieRating,
  movieGenre,
  movieDescription,
  movieVoters,
  closeModal,
}) => {
  const possibleRatings = [1, 2, 3, 4, 5];
  const [selectedRate, setSelectedRate] = useState(null);
  const [currentRate, setCurrentRate] = useState(null);
  const { user } = useUserAuth();

  useEffect(() => {
    if (user !== null) {
      const currentUserRating = Object.keys(movieVoters).find(
        (key) => key === user.uid
      );
      setCurrentRate(currentUserRating);
    }
  }, [movieVoters, user.uid, user]);

  console.log(selectedRate);

  return (
    <div className="movie_modal_container">
      <div className="movie_exit_container">
        <div className="movie_exit_icon_container">
          <Button
            content="X"
            width="2rem"
            height="2rem"
            fontSize="1rem"
            onClick={closeModal}
          ></Button>
        </div>
      </div>
      <div className="movie_modal_inner_container">
        <div className="movie_modal_image_container">
          <img
            src={movieImage}
            alt="movie_modal_image"
            className="movie_modal_image"
          />
        </div>
        <div className="movie_modal_info">
          <div className="movie_modal_name_year_container">
            <h2 className="movie_modal_name">{movieName}</h2>
            <h2 className="movie_modal_year">{movieYear}</h2>
          </div>
          <div className="movie_modal_genre_rating_container">
            <div className="movie_modal_genre_container">
              <p>{movieGenre}</p>
            </div>
            <div className="movie_card_rating_container">
              <img src={Star} alt="star_icon" className="rating_icon" />
              <p>{movieRating}</p>
            </div>
          </div>
          <div className="movie_description_container">
            <p>{movieDescription}</p>
          </div>
          {user !== null && (
            <div className="movie_user_rate_container">
              {possibleRatings.map((rate) => (
                <i
                  key={rate}
                  className={
                    movieVoters[currentRate] >= rate
                      ? "fas fa-star in-rate"
                      : "fas fa-star"
                  }
                  onClick={() => {
                    setSelectedRate(rate);
                    rateMovie(movieName, rate, user.uid);
                  }}
                ></i>
              ))}
              {currentRate && (
                <button
                  onClick={() => {
                    deleteRating(movieName, user.uid);
                  }}
                >
                  X
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;