import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";
import styles from "./ServiceWatch.module.scss";
const ServiceWatch = async () => {
  const { results } = await getMovieByPath("/watch/providers/movie");

  return (
    <div className={styles.genre}>
      <h1>Service</h1>
      {
        <ul>
          {results.map((watch) => (
            <li key={watch.id}>
              <Link href={`/movies/genre/${watch.id}`}>
                {watch.provider_name}{" "}
              </Link>
            </li>
          ))}
        </ul>
      }
      <p className={styles.seeMore}>Voir plus</p>
    </div>
  );
};

export default ServiceWatch;
