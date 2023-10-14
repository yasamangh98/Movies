import { Button, Heading, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
interface Props {
  onSelectedGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}
export const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const {
    genre: genres,
    error: genreError,
    isLoading: isLoadinggenre,
  } = useGenre();
  return (
    <>
      <ul>
        {genreError && <Text>{genreError}</Text>}
        <Heading
          paddingTop={3}
          textAlign="center"
          height="50px"
          borderRadius={7}
          backgroundColor="#38B2AC"
          margin={5}
          fontSize={20}
          boxShadow="2px 2px 4px #38B2AC "
        >
          Genres
        </Heading>
        {genres.map((genre) => {
          return (
            <li key={genre.id}>
              <Button
                width="150px"
                paddingTop={3}
                alignContent="center"
                whiteSpace={"normal"}
                alignItems={"left"}
                onClick={() => onSelectedGenre(genre)}
                margin={2}
                boxShadow="2px 2px 4px #38B2AC "
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default GenreList;
