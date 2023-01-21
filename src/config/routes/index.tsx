import React, {ReactElement, ReactNode} from 'react';
import {
    Routes,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Navigate,
    useLocation, BrowserRouter, Outlet
} from "react-router-dom";

//Layouts
// import NonAuthLayout from "../Layouts/NonAuthLayout";
// import VerticalLayout from "../Layouts/index";
//routes
import {authProtectedRoutes, publicRoutes} from "./allRoutes";
import Layout from "../../layout";
import {Breadcrumb, Col, Container, Row} from "reactstrap";

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {
                        publicRoutes.map((route, idx) => (
                            <Route
                                path={route.path}
                                element={route.component}
                                key={idx}
                            />
                        ))
                    }
                    <Route path="/" element={<Layout/>}>
                        <Route path="profile" element={<ProtectedPage/>}/>
                        <Route path="settings" element={<ProtectedPage/>}/>
                        <>
                            {
                                authProtectedRoutes.map((route, idx) => (
                                    <Route
                                        path={route.path}
                                        element={
                                            <ProtectedPage/>
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
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumb title="Starter" pageTitle="Pages"/>
                    <Row>
                        <Col xs={12}>
                            <p>Teste</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

