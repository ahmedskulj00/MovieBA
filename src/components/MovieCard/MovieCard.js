import React from "react";
import "./movieCardStyles.css";
import Star from "../../assets/images/star.png";
const MovieCard = ({
  movieImage,
  movieName,
  movieYear,
  movieRating,
  movieGenre,
}) => {
  return (
    <div className="movie_card_container">
      <div className="movie_card_inner_container">
        <div className="movie_card_image_container">
          <img
            src={movieImage}
            alt="movie_card_image"
            className="movie_card_image"
          />
        </div>
        <div className="movie_card_name_container">
          <h2 className="movie_card_name">{movieName}</h2>
        </div>
        <div className="movie_card_info_container">
          <p className="movie_card_year">{movieYear}</p>
          <p className="movie_card_genre">{movieGenre}</p>
        </div>
        <div className="movie_card_rating_container">
          <img src={Star} alt="star_icon" className="rating_icon" />
          <p>{movieRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
