import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
export const CardSkeleton = () => {
    return (_jsx(_Fragment, { children: _jsxs(Card, { children: [_jsx(Skeleton, { height: "200px" }), _jsx(CardBody, { children: _jsx(SkeletonText, {}) })] }) }));
};
