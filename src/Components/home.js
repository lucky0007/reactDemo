
import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/navbar';
import { useState } from 'react';
import routes from "../routes";
import ProtectedRoute from '../ProtectedRoute';



function Home(props) {
    const routes = props.routes;
    //const mainPanel = React.useRef(null);
    const getRoutes = ({routes}) => {
        return routes.map((prop) => {

            return (
                <Route
                    path={prop.path}
                    render={(props) => <prop.component {...props}/>}
                  
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
                    <Switch>{getRoutes(routes)}</Switch>

                </div>
            </div>

        </>
    );
}

export default Home;
