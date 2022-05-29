import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500";
const Movie = ({
  title,
  vote_average,
  overview,
  release_date,
  poster_path,
}) => {
  return (
    <div className="movie">
      <img src={API_IMG + poster_path} alt={title} />
      <div className="desc">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
      <div className="overview">
        <h3>overivew :</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
