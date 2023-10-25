import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, GridItem } from "@chakra-ui/react";
import { Gridmoives } from "./components/Gridmoives";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import GenreList from "./components/GenreList";
function App() {
    const [selectedQuery, setSelectedQuery] = useState({});
    return (_jsxs(Grid, { templateAreas: {
            base: `"nav" "main"`,
            md: `"nav header" "nav main"`,
            lg: `"nav header" "nav main"`,
        }, children: [_jsx(GridItem, { pl: "2", area: "header", margin: 0, paddingTop: 5, paddingBottom: 0, children: _jsx(Navbar, { onsearch: (search) => setSelectedQuery({ ...selectedQuery, search }) }) }), _jsx(GridItem, { paddingTop: 15, pl: "2", area: "nav", children: _jsx(GenreList, { selectedGenre: selectedQuery?.genre, onSelectedGenre: (genre) => setSelectedQuery({ ...selectedQuery, genre }) }) }), _jsx(GridItem, { pl: "2", area: "main", paddingLeft: "20px", paddingTop: 5, children: _jsx(Gridmoives, { selectedmoviequery: selectedQuery }) })] }));
}
export default App;
