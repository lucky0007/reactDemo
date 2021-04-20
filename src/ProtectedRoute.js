import React from 'react';

import { Route, Redirect } from "react-router-dom";
import fire from './auth/FireBaseAuth';

const ProtectedRoute = ({ children, layout: Layout, component: Component, ...rest }) => {

    const isAuth = true;


    // const isAuth = () => {
    //     fire.auth().onAuthStateChanged(user => {

    //         if (user) {
    //             return true;
    //         }

    //         return false;
    //     })

    // }

    return (
        <Route {...rest}
            render={(matchProps) => isAuth ? <Component {...matchProps} {...rest} /> : (<Redirect to={'/'} />)
            }
        />
        /*  <Route
             {...rest}
             render={matchProps => (
                 isAuth ?
                     <Component {...matchProps}/>
                     : <Redirect to="/login" />
             )}
         /> */
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