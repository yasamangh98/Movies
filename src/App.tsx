import { Grid, GridItem } from "@chakra-ui/react";
import { Gridmoives } from "./components/Gridmoives";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";

export interface MovieQuery {
  navbutton: string;
  search: string | null;
  genre: Genre | null;
}
function App() {
  const [selectedQuery, setSelectedQuery] = useState<MovieQuery>(
    {} as MovieQuery
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav header" "nav main"`,
        lg: `"nav header" "nav main"`,
      }}
    >
      <GridItem
        pl="2"
        area={"header"}
        margin={0}
        paddingTop={5}
        paddingBottom={0}
      >
        <Navbar
          onsearch={(search) => setSelectedQuery({ ...selectedQuery, search })}
        ></Navbar>
      </GridItem>
      <GridItem paddingTop={15} pl="2" area={"nav"}>
        <GenreList
          selectedGenre={selectedQuery?.genre}
          onSelectedGenre={(genre) =>
            setSelectedQuery({ ...selectedQuery, genre })
          }
        ></GenreList>
      </GridItem>
      <GridItem pl="2" area={"main"} paddingLeft="20px" paddingTop={5}>
        <Gridmoives selectedmoviequery={selectedQuery}></Gridmoives>
      </GridItem>
    </Grid>
  );
}

export default App;
