import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const Cardcontainer = ({ children }: Props) => {
  return <Box  overflow="hidden">{children}</Box>;
};
