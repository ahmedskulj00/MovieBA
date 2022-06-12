import React, { useState } from "react";
import "./movieCardStyles.css";
import Star from "../../assets/images/star.png";
import MovieModal from "../MovieModal/MovieModal";
import CustomModal from "../Modal/CustomModal";
const MovieCard = ({
  movieImage,
  movieName,
  movieYear,
  movieRating,
  movieGenre,
  movieDescription,
  movieVoters,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div className="movie_card_container" onClick={openModal}>
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
      {isModalOpen && (
        <CustomModal
          modalIsOpen={isModalOpen}
          closeModal={closeModal}
          width="60rem"
          height="40rem"
        >
          <MovieModal
            movieName={movieName}
            movieGenre={movieGenre}
            movieRating={movieRating}
            movieImage={movieImage}
            movieDescription={movieDescription}
            movieYear={movieYear}
            movieVoters={movieVoters}
            closeModal={closeModal}
          />
        </CustomModal>
      )}
    </div>
  );
};

export default MovieCard;
