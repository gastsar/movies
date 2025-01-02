import SearchResult from "../../SearchResults";

const GenreIdPage = ({ params, searchParams }) => {
  const { id } = params;

  return (
    <main className="genre-page">
      <h1>Genre page : {id}</h1>
      <SearchResult searchParams={searchParams} genreId={params.id} />
    </main>
  );
};

export default GenreIdPage;
