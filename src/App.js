import React from 'react';
import './App.css';
import './css/bootstrap.css';
import './css/dashboard.css';
import Login from './components/login.js';
import ForgotPassword from './components/forgotpassword.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/accounts/*" component={LoginContainer}/>
            <Route component={DashboardContainer}/>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

const LoginContainer = () => (
  <div className="container">
    <Route exact path="accounts/" render={() => <Redirect to="/login" />} />
    <Route path="/accounts/login" component={Login} />
    <Route path="/accounts/forgot-password" component={ForgotPassword} />
  </div>
)

const DashboardContainer = () => (
  <div>
    <div className="container">
  </div>
  </div>
)

export default App;
