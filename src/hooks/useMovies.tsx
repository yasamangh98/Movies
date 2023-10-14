import { MotionValue } from "framer-motion";
import { MovieQuery } from "../App";
import useData from "./useData";

export interface Movie {
  title: string;
  id: number;
  original_language: string;
  poster_path: string;
  overview: string;
  popularity: number;
  release_date: number;
  vote_average: number;
}

const useMovies = (selected: MovieQuery) => {
  let endpoint = "discover";

  if (selected.search && selected.genre) {
    endpoint = "search";
  } else if (selected.search) {
    endpoint = "search";
  } else if (selected.genre) {
    endpoint = "discover";
  }

  return useData<Movie>(
    endpoint,
    "/movie",
    {
      params: { with_genres: selected?.genre?.id, query: selected?.search },
    },
    [selected]
  );
};

export default useMovies;
