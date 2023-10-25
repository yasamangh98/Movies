import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Cardmovies from "./CardMovies";
import { Grid, SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import { Cardcontainer } from "./Cardcontainer";
import { CardSkeleton } from "./CardSkeleton";
export const Gridmoives = ({ selectedmoviequery }) => {
    const { data: movies, error: moviesError, isLoading: moviesLoading, } = useMovies(selectedmoviequery);
    const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (_jsxs(_Fragment, { children: [moviesError && _jsx(Text, { children: "moviesError.message" }), _jsxs(SimpleGrid, { columns: {
                    sm: 1,
                    md: 4,
                    lg: 3,
                    xl: 4,
                }, spacing: 10, paddingLeft: 5, marginRight: 0, children: [moviesLoading &&
                        skeletons.map((skeleton) => {
                            return (_jsx(Cardcontainer, { children: _jsx(CardSkeleton, {}) }, skeleton));
                        }), _jsx(Grid, { templateColumns: "repeat(3, 2fr)", gap: 2, margin: 2, children: _jsx(Cardmovies, { inputmovies: movies }) })] })] }));
};
export default Gridmoives;
