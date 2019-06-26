import { RouteComponentProps } from "@reach/router";
import * as React from "react";

export const IssuePage: React.FunctionComponent<RouteComponentProps> = () => {
    return (
        <div>
            <h1>This should have white bg color. Refresh page to see the issue.</h1>
        </div>
    );
};
