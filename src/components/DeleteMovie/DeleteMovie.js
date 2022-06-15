import React from "react";
import Button from "../Button/Button";
import "./deleteMovieStyles.css";

const DeleteMovie = ({ deleteFunction, movieName, closeModal }) => {
  return (
    <div className="delete_movie_container">
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
      <div className="delete_movie_inner_container">
        <p>Are you sure you want to delete this movie?</p>
        <div className="delete_movie_buttons_container">
          <Button
            content="Yes"
            onClick={() => deleteFunction(movieName)}
            width="8rem"
            height="2rem"
          ></Button>
          <Button
            content="No"
            onClick={closeModal}
            width="8rem"
            height="2rem"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovie;
