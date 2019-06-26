import { RouteComponentProps } from "@reach/router";
import * as React from "react";

export const Home: React.FunctionComponent<RouteComponentProps> = () => {
    return (
        <div style={{ backgroundColor: "red" }}>
            <h1>Home Page</h1>
        </div>
    );
};
