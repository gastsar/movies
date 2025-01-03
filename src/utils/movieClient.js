import "server-only";

export const getMovieByPath = (path, params = [], language = "fr-FR") => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append("api_key", process.env.TMDB_API_KEY);
  url.searchParams.append("language", language);
  params
    .filter((params) => params.value)
    .forEach((params) => url.searchParams.append(params.key, params.value));

  return fetch(url).then((res) => res.json());
};
