import React from "react";
import "./App.css";
import Login from "./components/layout/login.js";
import ForgotPassword from "./components/layout/forgotpassword.js";
import MainPage from "./components/layout/mainpage.js";
import { getUserToken } from "./services/auth.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/login/forgot-password" component={ForgotPassword} />
            <Route exact path="/app/:page" component={MainPage} />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
