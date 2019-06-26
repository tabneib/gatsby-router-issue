import { Router } from "@reach/router";
import * as React from "react";
import { IssuePage } from "../IssuePage";
import { NotFound } from "../NotFound";
import { Home } from "../Home";

export const AppRouter: React.FunctionComponent = () => {
    return (
        <Router>
            <NotFound default={true} />
            <Home path="/" />
            <IssuePage path="/issue" />
        </Router>
    );
};
