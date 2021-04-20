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
      <Switch>
        <Route path="/login">
          <ContainerLoginSignup />
        </Route> 
        <ProtectedRoute path="/home" component={(props) => <Home {...props}/>}  />

  
        <Route exact path="/admin-management" component={adminManagement}>
        </Route>

        <Redirect from="/" to="login" />
      </Switch>
      </Router>
   



  );
}

export default App;
