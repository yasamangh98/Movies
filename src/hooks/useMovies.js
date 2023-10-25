import useData from "./useData";
const useMovies = (selected) => {
    let endpoint = "discover";
    if (selected.search && selected.genre) {
        endpoint = "search";
    }
    else if (selected.search) {
        endpoint = "search";
    }
    else if (selected.genre) {
        endpoint = "discover";
    }
    return useData(endpoint, "/movie", {
        params: { with_genres: selected?.genre?.id, query: selected?.search },
    }, [selected]);
};
export default useMovies;
