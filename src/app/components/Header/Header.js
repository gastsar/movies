import Link from "next/link";
import MovieSearch from "../MovieSearch/MovieSearch";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">MyMovie</Link>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href="/series">Séries</Link>
            </li>
            <li>
              <Link href="/movies">Films</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.search}>
        <MovieSearch />
        <span className="material-symbols-outlined">person</span>
      </div>
    </header>
  );
};

export default Header;
