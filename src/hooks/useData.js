import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
const useData = (type, endpoint, requestConfig, dependency) => {
    const [data, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        axios
            .get(`https://api.themoviedb.org/3/${type}/${endpoint}?api_key=3cf77d09be3435ea74b78b475ae906b5`, { signal: controller.signal, ...requestConfig })
            .then((res) => {
            console.log(res.data.results);
            setMovies(res.data.results);
            setLoading(false);
        })
            .catch((error) => {
            if (error instanceof CanceledError)
                return;
            setError(error.message);
            setLoading(false);
        });
        return () => controller.abort();
    }, dependency ? [...dependency] : []);
    return { data, error, isLoading };
};
export default useData;
