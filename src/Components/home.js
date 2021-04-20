
import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/navbar';
import { useState } from 'react';
import routes from "../routes";
import ProtectedRoute from '../ProtectedRoute';



function Home(props) {
    //const routes = props.routes;
    //const mainPanel = React.useRef(null);
    const getRoutes = () => {
        console.log(props);
        return routes.map(({component,path,layout}) => {
            console.log(props.path+path);
            return (
                <Route
                exact
                    path={props.path+path}
                    render={component}

                     />
            );

        });
    };

    return (
        <>
            <div className="container">

                <Navbar />
                <Sidebar routes={routes} />
                <div className="main-content">
                    <Switch>{getRoutes()}</Switch>

                </div>
            </div>

        </>
    );
}

export default Home;
