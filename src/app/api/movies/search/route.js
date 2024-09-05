import { getMovieByPath } from "@/utils/movieClient";
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const searchResults = await getMovieByPath("/search/movie", [
    { key: "query", value: query },
  ]);
  return new Response(JSON.stringify(searchResults), { status: 200 });
}
