import { getMovieByPath } from "@/utils/movieClient";

const Trailer = async ({ params }) => {
  const { results } = await getMovieByPath(`/movie/${params}/videos`);
  const trailerKey = results[0].key;
  console.log(trailerKey);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <h2>Trailer du film</h2>

      <p>Voici le trailer du film : {params}</p>

      <p>
        Lien YouTube :{" "}
        <a href={`https://www.youtube.com/watch?v=${trailerKey}`}>
          https://www.youtube.com/watch?v=${trailerKey}
        </a>
      </p>

      <p>
        Pour regarder le trailer, vous pouvez cliquer sur le lien YouTube
        ci-dessus.
      </p>

      <p>
        N&rsquo;oubliez pas de laisser un commentaire si vous avez aimez ce film
        !
      </p>
    </div>
  );
};

export default Trailer;
