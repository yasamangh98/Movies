import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Heading, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
export const GenreList = ({ onSelectedGenre, selectedGenre }) => {
    const { genre: genres, error: genreError, isLoading: isLoadinggenre, } = useGenre();
    return (_jsx(_Fragment, { children: _jsxs("ul", { children: [genreError && _jsx(Text, { children: genreError }), _jsx(Heading, { paddingTop: 3, textAlign: "center", height: "50px", borderRadius: 7, backgroundColor: "#38B2AC", margin: 5, fontSize: 20, boxShadow: "2px 2px 4px #38B2AC ", children: "Genres" }), genres.map((genre) => {
                    return (_jsx("li", { children: _jsx(Button, { width: "150px", paddingTop: 3, alignContent: "center", whiteSpace: "normal", alignItems: "left", onClick: () => onSelectedGenre(genre), margin: 2, boxShadow: "2px 2px 4px #38B2AC ", fontWeight: genre.id === selectedGenre?.id ? "bold" : "normal", children: genre.name }) }, genre.id));
                })] }) }));
};
export default GenreList;
