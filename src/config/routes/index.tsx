import React, {ReactElement, ReactNode} from 'react';
import {
    Routes,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Navigate,
    useLocation, BrowserRouter
} from "react-router-dom";

//Layouts
// import NonAuthLayout from "../Layouts/NonAuthLayout";
// import VerticalLayout from "../Layouts/index";
//routes
import {authProtectedRoutes, publicRoutes} from "./allRoutes";
import {AuthProtected, AccessRoute} from './AuthProtected';

const Index = () => {
    const availablePublicRoutesPaths = publicRoutes.map((r) => r.path);
    const availableAuthRoutesPath = authProtectedRoutes.map((r) => r.path);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route>
                        {
                            publicRoutes.map((route, idx) => (
                                <Route
                                    path={route.path}
                                    element={route.component}
                                    key={idx}
                                />
                            ))
                        }
                        <>
                            {
                                authProtectedRoutes.map((route, idx) => (
                                    <Route
                                        path={route.path}
                                        element={
                                            <AuthProtected>
                                                    <ProtectedPage/>
                                            </AuthProtected>
                                        }
                                        key={idx}
                                    />
                                ))
                            }
                        </>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default Index;


function ProtectedPage() {
    return <h3>Protected</h3>;
}

function Layout(Children: any) {
    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            width: '100%',
            backgroundColor: 'red'
        }}>
            <Children/>
        </div>)
}
