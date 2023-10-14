import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

const useGenre = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=3cf77d09be3435ea74b78b475ae906b5`,
        { signal: controller.signal }
      )
      .then((res) => {
        console.log(res.data);
        setGenre(res.data.genres);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genre, error, isLoading };
};

export default useGenre;
