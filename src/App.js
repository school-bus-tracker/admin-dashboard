import React from 'react';
import './App.css';
import Login from './components/login.js';
import ForgotPassword from './components/forgotpassword.js';
import MainPage from './components/mainpage.js';

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
            <Route exact path="/login" component={Login}/>
            <Route path="/login/forgot-password" component={ForgotPassword} />
            <Route component={DashboardContainer}/>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

const DashboardContainer = () => (
  <div>
    <Route exact path="/" render={() => <Redirect to="/app" />} />
    <Route exact path="/app" component={MainPage}/>
  </div>
)

export default App;
