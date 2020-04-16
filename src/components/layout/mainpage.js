import React from 'react';
import SideNav from './sidenav';
import TopNav from './topnav'; 
import Admin from '../content/admin';
import Driver from '../content/driver';
import Student from '../content/student';
import Bus from '../content/bus';
import Dashboard from '../content/dashboard';
import {
    Switch,
    Route
  } from 'react-router-dom';


function MainPage() {
    return (
        <div id="wrapper">
            <SideNav/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopNav/>
                    <div className="container-fluid">
                        <Switch>
                            <Route exact path='/app' component={Dashboard}/>
                            <Route path='/app/admin' component={Admin}/>
                            <Route path='/app/driver' component={Driver}/>
                            <Route path='/app/student' component={Student}/>
                            <Route path='/app/bus' component={Bus}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;