import logo from './logo.svg';
import './App.css';
import loginSignupContainer from './Components/login';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ContainerLoginSignup from './Containers/index';
import Home from './Components/home';
import ProtectedRoute from './ProtectedRoute';
import { useState } from 'react';
import adminManagement from './Components/Admin-Management/admin-management';
import main from './Components/main/main';



function App() {
// const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
    <Route path="/" exact>
      <button>login</button>
      <button>logout</button>
    </Route>
    <ProtectedRoute path="/home" render={(props) => <Home {...props}/>}  /> 
    
  {/* <ProtectedRoute exact path="/main" component={main} isAuth={isAuth} /> */}
    
  </Router>

    // <BrowserRouter>
    // <Router>
    //   <Switch>
    //     {/* <Route path="/login">
    //       <ContainerLoginSignup />
    //     </Route> */}
    //     {/* <Route path="/home" render={(props) => <Home {...props} />} /> */}

    //     <ProtectedRoute path="/main" component={main} isAuth={isAuth} />
    //     <Route path="/admin-management" component={adminManagement}>
    //     </Route>

    //     {/* <Redirect from="/" to="login" /> */}
    //   </Switch>
    //   </Router>
    // </BrowserRouter>

  

  );
}

export default App;
