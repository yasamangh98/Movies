import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import bestseller from "../assets/rating.png";
import rank from "../assets/threestars.png";
interface Props {
  inputmovies: Movie[];
}

export const MovieCArd = ({ inputmovies }: Props) => {
  const imgURL = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      {inputmovies.map((movie) => {
        return (
          <Card
            border="1px solid #38B2AC"
            boxShadow="5px 5px 4px#38B2AC;"
            borderRadius={7}
            key={movie.id}
            width={{ base: "100%", md: "3000px", lg: "350px" }} // Adjust width for different breakpoints
          >
            <Image
              borderRadius={5}
              key={movie.id}
              src={imgURL + movie.poster_path}
            ></Image>
            <CardBody
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
              fontFamily="system-ui"
              padding={0}
            >
              <CardHeader fontWeight="bold" fontSize={15}>
                {movie.title}
              </CardHeader>
              <Box fontSize={9} paddingLeft={5} paddingBottom={2}>
                <Text>Original language: {movie.original_language}</Text>

                <HStack align="center">
                  {" "}
                  {/* Use HStack to align items horizontally */}
                  <Text>Popularity: </Text>
                  {movie.popularity >= 840.0 ? (
                    <Image src={bestseller} alt="Bestseller" boxSize="20px" />
                  ) : (
                    <Image src={rank} alt="Rank" boxSize="20px" />
                  )}
                </HStack>

                <Text paddingBottom={1}>
                  Release Date: {movie.release_date}
                </Text>
                {/* <Text>Overview: {movie.overview}</Text> */}
              </Box>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};
export default MovieCArd;
