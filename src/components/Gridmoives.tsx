import Cardmovies from "./CardMovies";
import { Grid, SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import { MovieQuery } from "../App";
import { Cardcontainer } from "./Cardcontainer";
import { CardSkeleton } from "./CardSkeleton";
interface Props {
  selectedmoviequery: MovieQuery;
}
export const Gridmoives = ({ selectedmoviequery }: Props) => {
  const {
    data: movies,
    error: moviesError,
    isLoading: moviesLoading,
  } = useMovies(selectedmoviequery);
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {moviesError && <Text>moviesError.message</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 4,
          lg: 3,
          xl: 4,
        }}
        spacing={10}
        paddingLeft={5}
        marginRight={0}
      >
        {moviesLoading &&
          skeletons.map((skeleton) => {
            return (
              <Cardcontainer key={skeleton}>
                <CardSkeleton></CardSkeleton>
              </Cardcontainer>
            );
          })}
        <Grid templateColumns="repeat(3, 2fr)" gap={2} margin={2}>
          {<Cardmovies inputmovies={movies}></Cardmovies>}
        </Grid>
      </SimpleGrid>
    </>
  );
};
export default Gridmoives;
