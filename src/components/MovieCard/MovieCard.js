import React, { useState } from "react";
import "./movieCardStyles.css";
import Star from "../../assets/images/star.png";
import MovieModal from "../MovieModal/MovieModal";
import CustomModal from "../Modal/CustomModal";
import Button from "../Button/Button";
import { deleteMovie } from "../../lib/Functions/movie_functions";
import DeleteMovie from "../DeleteMovie/DeleteMovie";
const MovieCard = ({
  movieImage,
  movieName,
  movieYear,
  movieRating,
  movieGenre,
  movieDescription,
  movieVoters,
  role,
  user,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDelete = (e) => {
    e.stopPropagation();
    setIsDeleteModalOpen(false);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div className="movie_card_container">
      <div className="movie_card_inner_container">
        <div className="movie_card_image_container" onClick={openModal}>
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
        <div className="movie_card_rating_delete_container">
          <div className="movie_card_rating_container">
            <img src={Star} alt="star_icon" className="rating_icon" />
            <p>{movieRating === "NaN" ? "0.0" : movieRating}</p>
          </div>
          {role === "admin" && !user.isAnonymous ? (
            <div className="movie_card_delete_container">
              <Button
                onClick={() => {
                  openDeleteModal();
                }}
                deleteButton={true}
              ></Button>
              {isDeleteModalOpen && (
                <CustomModal
                  modalIsOpen={isDeleteModalOpen}
                  closeModal={closeDelete}
                  width="30rem"
                  height="20rem"
                >
                  <DeleteMovie
                    closeModal={closeDelete}
                    deleteFunction={deleteMovie}
                    movieName={movieName}
                  />
                </CustomModal>
              )}
            </div>
          ) : null}
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
