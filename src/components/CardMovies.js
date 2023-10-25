import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Card, CardBody, CardHeader, HStack, Image, Text, } from "@chakra-ui/react";
import bestseller from "../assets/rating.png";
import rank from "../assets/threestars.png";
export const MovieCArd = ({ inputmovies }) => {
    const imgURL = "https://image.tmdb.org/t/p/original/";
    return (_jsx(_Fragment, { children: inputmovies.map((movie) => {
            return (_jsxs(Card, { border: "1px solid #38B2AC", boxShadow: "5px 5px 4px#38B2AC;", borderRadius: 7, width: { base: "100%", md: "3000px", lg: "350px" }, children: [_jsx(Image, { borderRadius: 5, src: imgURL + movie.poster_path }, movie.id), _jsxs(CardBody, { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontFamily: "system-ui", padding: 0, children: [_jsx(CardHeader, { fontWeight: "bold", fontSize: 15, children: movie.title }), _jsxs(Box, { fontSize: 9, paddingLeft: 5, paddingBottom: 2, children: [_jsxs(Text, { children: ["Original language: ", movie.original_language] }), _jsxs(HStack, { align: "center", children: [" ", _jsx(Text, { children: "Popularity: " }), movie.popularity >= 840.0 ? (_jsx(Image, { src: bestseller, alt: "Bestseller", boxSize: "20px" })) : (_jsx(Image, { src: rank, alt: "Rank", boxSize: "20px" }))] }), _jsxs(Text, { paddingBottom: 1, children: ["Release Date: ", movie.release_date] })] })] })] }, movie.id));
        }) }));
};
export default MovieCArd;
