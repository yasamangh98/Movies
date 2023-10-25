import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
    config: {
        initialColorMode: "light",
    },
    colors: {
        chakra: {
            bodyBg: "#F8F8F8", // Your desired bright background color
        },
    },
    // ...other theme customization options
});
export default theme;
