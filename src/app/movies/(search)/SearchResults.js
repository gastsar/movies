import MediaCard from "@/app/components/MediaCard/MediaCard";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./SearchResults.module.scss";

const SearchResults = async ({ searchParams, genreId }) => {
  const { results } = await getMovieByPath("/discover/movie", [
    { key: "sort_by", value: searchParams.sort_by },
    { key: "release_date.gte", value: searchParams["release_date.gte"] },
    { key: "release_date.lte", value: searchParams["release_date.lte"] },
    { key: "with_genres", value: genreId },
  ]);
  return (
    <ul className={styles.container__result}>
      {results
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <li key={movie.id}>
            <MediaCard media={movie} />
          </li>
        ))}
    </ul>
  );
};

export default SearchResults;
