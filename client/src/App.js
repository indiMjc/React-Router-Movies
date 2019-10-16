import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList /*, setSavedList*/] = useState([]);
  const [movies, setMovies] = useState([]);
  // const [movie, setMovie] = useState([]);

  // const addToSavedList = movie => {
  //   setSavedList([...savedList, movie]);
  // };

  return (
    <div>
      <SavedList list={savedList} />
      <Route
        exact
        path="/"
        render={() => <MovieList states={[movies, setMovies]} />}
      />
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;
