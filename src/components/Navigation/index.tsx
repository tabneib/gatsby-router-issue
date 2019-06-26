import * as React from "react";
import { Link } from "@reach/router";

export const Navigation: React.FunctionComponent = () => {
    return (
        <nav>
            <Link to="home">Home </Link>
            <Link to="about">About </Link>
        </nav>
    );
};
