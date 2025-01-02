import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../MediaCard/MediaCard";
import styles from "./Popular.module.scss";
const Popular = async () => {
  const { results } = await await getMovieByPath("/movie/popular");
  const popularMovies = results.slice(0, 10);
  return (
    <div className={styles.popularList}>
      <h2>Top 10 </h2>
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>
            <MediaCard media={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popular;
