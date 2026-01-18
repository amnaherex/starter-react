const KEY = "b5ab295b00c5a44fe80f390371536bd0";
const URLL = "https://api.themoviedb.org/3";

interface MovieResult {
  [key: string]: unknown;
}

interface MovieResponse {
  results: MovieResult[];
}

export async function getmovie(): Promise<MovieResult[]> {
  const response = await fetch(`${URLL}/movie/popular?api_key=${KEY}`);
  const data: MovieResponse = await response.json();
  return data.results;
}

export async function search(query: string): Promise<MovieResult[]> {
  const response = await fetch(`${URLL}/movie/popular?api_key=${KEY}&query=${query}`);
  const data: MovieResponse = await response.json();
  return data.results;
}