import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onsearch: (searchterm: string) => void;
}
export const Navbar = ({ onsearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (inputRef.current) {
            onsearch(inputRef.current.value);
            console.log(inputRef.current.value);
          }
        }}
      >
        <HStack margin={4}>
          {" "}
          <Button
            backgroundColor={"#B2F5EA"}
            borderRadius={50}
            children={<BsSearch />}
          ></Button>
          <Input
            ref={inputRef}
            boxShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
            borderRadius={20}
            w="70vw"
          ></Input>
        </HStack>
      </form>
    </>
  );
};
export default Navbar;
