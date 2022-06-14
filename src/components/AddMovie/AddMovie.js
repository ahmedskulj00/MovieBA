import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { addMovie } from "../../lib/Functions/movie_functions";
import "./addMovieStyles.css";

const AddMovie = ({ closeModal }) => {
  const [movieName, setMovieName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (
      movieName.length === 0 ||
      imageUrl.length === 0 ||
      description.length === 0 ||
      genre.length === 0 ||
      releaseYear.length === 0
    ) {
      setError("All fields are required");
    } else {
      addMovie(movieName, imageUrl, description, genre, releaseYear);
      closeModal();
    }
  };

  useEffect(() => {
    if (
      movieName.length > 0 ||
      imageUrl.length > 0 ||
      description.length > 0 ||
      genre.length > 0 ||
      releaseYear.length > 0
    ) {
      setError("");
    }
  }, [movieName, imageUrl, description, genre, releaseYear]);

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
            inputType="textarea"
            placeholder="Description..."
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Genre..."
            onChange={(e) => setGenre(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Year of release..."
            onChange={(e) => setReleaseYear(e.target.value)}
          />
          <div className="error_container">{error}</div>
          <Button
            content="Submit"
            onClick={() => {
              handleSubmit();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
