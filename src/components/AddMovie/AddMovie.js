import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { addMovie } from "../../lib/Functions/movie_functions";
import "./addMovieStyles.css";

const AddMovie = ({ closeModal }) => {
  const [movieName, setMovieName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = () => {
    addMovie(movieName, imageUrl, description, genre);
  };

  return (
    <div className="add_movie_container">
      <div className="add_movie_inner_container">
        <div className="add_movie_title_container">
          <h1 className="add_movie_title">Add a New Movie</h1>
          <Button
            content="X"
            width="2rem"
            height="2rem"
            fontSize="1rem"
            onClick={closeModal}
          ></Button>
        </div>
        <div className="add_movie_form_container">
          <Input
            type="text"
            placeholder="Name..."
            onChange={(e) => setMovieName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Image URL..."
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Description..."
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Genre..."
            onChange={(e) => setGenre(e.target.value)}
          />
          <Button
            content="Submit"
            onClick={() => {
              handleSubmit();
              closeModal();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
