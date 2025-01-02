import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";
import styles from "./Genre.module.scss";
const Genre = async () => {
  const { genres } = await getMovieByPath("/genre/movie/list");
  return (
    <div className={styles.genre}>
      <h1>Genre </h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <Link href={`/movies/genres/${genre.id}`}>{genre.name} </Link>
          </li>
        ))}
      </ul>{" "}
      <p className={styles.seeMore}>Voir plus</p>
    </div>
  );
};

export default Genre;
