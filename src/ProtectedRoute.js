import React, { Component } from 'react';

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {

    const isAuth = true;

    return (
        <Route {...rest}
            render={() => isAuth ? (children) : (<Redirect to={'/'} />)
            }
        />
    );

        
        }
    
// function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {

//     return (

//         <Route
//             {...rest}
//             render={(props) => {

//                 if (isAuth) {
//                     return <Component />;

//                 }

//                 else {

//                     return (

//                         <Redirect to={{ pathname: "/", state: { from: props.location } }} />

//                     );
//                     }
//                     }}

//                    />

//     );
// }



export default ProtectedRoute;