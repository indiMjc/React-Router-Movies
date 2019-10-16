import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = props => {
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(async response => {
          await props.states[1](response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, [props.states]);

  return (
    <div className="movie-list">
      {props.states[0].map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  // const { title, director, metascore, stars } = movie;
  return <MovieCard key={movie.id} info={movie} />;
}

export default MovieList;
