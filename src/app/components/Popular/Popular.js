import { getMovieByPath } from "@/utils/movieClient";
import MediaCard from "../MediaCard/MediaCard";
import styles from "./Popular.module.scss";
const Popular = async () => {
  const { results } = await await getMovieByPath("/movie/popular");
  const popularMovies = results.slice(0, 5);
  return (
    <div className={styles.popularList}>
      <h2>Les plus populaires</h2>
      <ul>
        {popularMovies.map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Popular;
