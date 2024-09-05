import Image from "next/image";
import Link from "next/link";

const MovieSearchResults = ({ movieResults }) => {
  return (
    <ul>
      {movieResults.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`} style={{ position: "relative" }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${movie.backdrop_path}`}
              alt={`couverture de ${movie.title}`}
              width={90} // Largeur fixe
              height={40} // Hauteur pour maintenir le ratio
            />
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieSearchResults;
