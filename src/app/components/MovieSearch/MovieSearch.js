"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import styles from "./MovieSearch.module.scss";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";
const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [hasFocus, setHasFocus] = useState(false);
  const updateMovieSearches = async (query) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results);
  };

  return (
    <div className={styles.movieSearch}>
      <DebounceInput
        type="search"
        minLength={3}
        debounceTimeout={300}
        onChange={(e) => updateMovieSearch(e.target.value)}
        placeholder="Rechercher un titre ..."
        onBlurCapture={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
      />
      {movieResults.length > 0 && hasFocus && (
        <MovieSearchResults movieResults={movieResults} />
      )}
    </div>
  );
};

export default MovieSearch;
