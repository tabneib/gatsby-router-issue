import * as React from "react";
import { Navigation } from "../components/Navigation";
import { AppRouter } from "./AppRouter";

export const Issue: React.FunctionComponent<{}> = () => {
    return (
        <React.Fragment>
            <Navigation />
            <AppRouter />
        </React.Fragment>
    );
};
