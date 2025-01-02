"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import styles from "./MovieSearch.module.scss";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";
const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [hasFocus, setHasFocus] = useState(false);
  const updateMovieSearch = async (query) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results);
  };

  return (
    <div className={styles.movieSearch}>
      <DebounceInput
        type="search"
        minLength={3}
        debounceTimeout={200}
        onChange={(e) => updateMovieSearch(e.target.value)}
        placeholder="Rechercher un titre ..."
        /*   onBlurCapture={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)} */
      />

      <div className={styles.movieSearchResults}>
        {movieResults.length > 0 && (
          <MovieSearchResults movieResults={movieResults} />
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
