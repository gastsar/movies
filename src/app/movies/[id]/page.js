import Trailer from "@/app/components/Trailer/Trailer";
import { getMovieByPath } from "@/utils/movieClient";

const MovieIdPage = async ({ params }) => {
  const { results } = await getMovieByPath(`/movie/${params.id}`);

  return (
    <main>
      <div>
        <Trailer params={params.id} />
      </div>
      <p> Movie page with: </p>
    </main>
  );
};

export default MovieIdPage;
