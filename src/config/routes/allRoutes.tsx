import React, {ReactElement, ReactNode} from "react";
import {Navigate} from "react-router-dom";

interface IRoutes {
    path: string,
    exact?: boolean,
    component: (JSX.Element) | null
}

const authProtectedRoutes: IRoutes[] = [

    //User Profile
    {path: "/profile", component: null},
    {path: "/dashboard", component: null},

    // this route should be at the end of all other routes
    // eslint-disable-next-line react/display-name
    {
        path: "/",
        exact: true,
        component: <Navigate to="/" />,
    },
];

const publicRoutes = [
    // Authentication Page

    {path: "/auth-offline", component: null},

];

export {authProtectedRoutes, publicRoutes};
