import Image from "next/image";
import Link from "next/link";
import styles from "./MediaCard.module.scss";
const MediaCard = ({ media }) => {
  return (
    <Link href={`/movies/${media.id}`} className={styles.card}>
      <div className={styles.image}>
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${media.poster_path}`}
          alt={`couverture de ${media.title}`}
          priority={false}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <span className={styles.vote}>⭐{media.vote_average.toFixed(1)}</span>
      <div className={styles.content}>
        <span className="material-symbols-outlined">info</span>
        <h2>{media.title}</h2>
        {/*  {" "}
        <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>{" "}
     */}{" "}
      </div>
    </Link>
  );
};

export default MediaCard;
