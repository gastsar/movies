const MovieIdPage = ({ params }) => {
  console.log(params);
  return (
    <>
      <div>MovieIdPage</div>
      <p> Movie page with: {params.id}</p>
    </>
  );
};

export default MovieIdPage;
