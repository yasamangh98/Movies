import axios, { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
export interface FetchReponse<T> {
  results: T[];
}
const useData = <T,>(
  type: string,
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependency?: any[]
) => {
  const [data, setMovies] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      axios
        .get<FetchReponse<T>>(
          `https://api.themoviedb.org/3/${type}/${endpoint}?api_key=3cf77d09be3435ea74b78b475ae906b5`,
          { signal: controller.signal, ...requestConfig }
        )
        .then((res) => {
          console.log(res.data.results);
          setMovies(res.data.results);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    dependency ? [...dependency] : []
  );
  return { data, error, isLoading };
};

export default useData;
