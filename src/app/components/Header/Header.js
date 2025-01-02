"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMoviePlay } from "react-icons/bi";
import { BsCollectionPlay } from "react-icons/bs";
import { GoHeart, GoHome } from "react-icons/go";
import styles from "./Header.module.scss";
const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.logoNav}>
        <Link href="/">MyMovie</Link>
        <nav className={styles.nav}>
          <ul>
            <li key="home" className={pathname === "/" ? styles.active : ""}>
              <Link href="/">
                <GoHome />
                Acceuil
              </Link>
            </li>
            <li
              key="series"
              className={pathname === "/series" ? styles.active : ""}
            >
              <Link href="/series">
                <BiMoviePlay />
                Séries TV
              </Link>
            </li>
            <li
              key="movie"
              className={pathname === "/movie" ? styles.active : ""}
            >
              <Link href="/movie">
                <BsCollectionPlay />
                Films
              </Link>
            </li>
            <li
              key="favorites"
              className={pathname === "/favorites" ? styles.active : ""}
            >
              <Link href="/favorites">
                <GoHeart />
                Favoris
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
