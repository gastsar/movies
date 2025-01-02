import SearchResult from "./(search)/SearchResults";

const MoviesPage = ({ searchParams }) => {
  return (
    <main>
      <div>MoviesPage</div>
      <div>
        <SearchResult searchParams={searchParams} />
      </div>
    </main>
  );
};

export default MoviesPage;
