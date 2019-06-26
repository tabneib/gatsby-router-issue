import * as React from "react";
import { Link } from "@reach/router";

export const Navigation: React.FunctionComponent = () => {
    return (
        <nav>
            <Link to="/" style={{ padding: "20px" }}>
                Home
            </Link>
            <Link to="issue" style={{ padding: "20px" }}>
                Issue Page
            </Link>
        </nav>
    );
};
