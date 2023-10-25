import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, HStack, Input, } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
export const Navbar = ({ onsearch }) => {
    const inputRef = useRef(null);
    return (_jsx(_Fragment, { children: _jsx("form", { onSubmit: (event) => {
                event.preventDefault();
                if (inputRef.current) {
                    onsearch(inputRef.current.value);
                    console.log(inputRef.current.value);
                }
            }, children: _jsxs(HStack, { margin: 4, children: [" ", _jsx(Button, { backgroundColor: "#B2F5EA", borderRadius: 50, children: _jsx(BsSearch, {}) }), _jsx(Input, { ref: inputRef, boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", borderRadius: 20, w: "70vw" })] }) }) }));
};
export default Navbar;
