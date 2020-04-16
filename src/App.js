import React from 'react';
import './App.css';
import Login from './components/layout/login.js';
import ForgotPassword from './components/layout/forgotpassword.js';
import MainPage from './components/layout/mainpage.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App({history}) {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <div className="App">
            <Route path="/login" component={Login}/>
            <Route path="/login/forgot-password" component={ForgotPassword} />
            <Route path="/app" component={MainPage}/>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
