import { Router } from "@reach/router";
import * as React from "react";
import { About } from "../About";
import { NotFound } from "../NotFound";
import { Home } from "../Home";

export const AppRouter: React.FunctionComponent = () => {
    return (
        <Router>
            <NotFound default={true} />
            <Home path="/" />
            <About path="/about" />
        </Router>
    );
};
