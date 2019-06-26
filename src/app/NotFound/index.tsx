import { RouteComponentProps } from "@reach/router";
import * as React from "react";

type INotFoundProps = RouteComponentProps;

export const NotFound: React.FunctionComponent<INotFoundProps> = () => {
    return <h1>404 Page not found.</h1>;
};
