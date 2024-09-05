import Image from "next/image";
import Link from "next/link";
import styles from "./MediaCard.module.scss";
const MediaCard = ({ media }) => {
  return (
    <li className={styles.card}>
      <Link href={`/movies/${media.id}`}>
        <div className={styles.image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${media.poster_path}`}
            alt={`couverture de ${media.title}`}
            width={200}
            height={300}
            priority={false}
          />
        </div>
        <div className={styles.content}>
          <span>{media.vote_average.toFixed(1)}</span>
          <h2>{media.title}</h2>
          <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
        </div>
      </Link>
    </li>
  );
};

export default MediaCard;
