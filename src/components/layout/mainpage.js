import React,{useState} from 'react';
import SideNav from './sidenav';
import TopNav from './topnav'; 
import Admin from '../content/admin';
import Driver from '../content/driver';
import Student from '../content/student';
import Bus from '../content/bus';
import Dashboard from '../content/dashboard';
import School from '../content/school';
import {getUserToken,logoutService, getUserProfile} from '../../services/auth.js';
import {
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

function MainPage() {
    var token = getUserToken()
    var profile = getUserProfile()

    return (
        <div id="wrapper">
            <SideNav/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopNav name={profile.FirstName}/>
                    <div className="container-fluid">
                    { token? "": <Redirect to="/login/"/>}
                        <Switch>
                            <Route exact path='/app/main' component={Dashboard}/>
                            <Route path='/app/school' component={()=><School token={token}></School>}/>
                            <Route path='/app/admin' component={()=><Admin token={token}></Admin>}/>
                            <Route path='/app/driver' component={Driver}/>
                            <Route path='/app/student' component={Student}/>
                            <Route path='/app/bus' component={Bus}/>
                            <Route path='/app/logout' component={Logout}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Logout(){
    logoutService()
    return(
        <Redirect to="/login"/>
    )
}

export default MainPage;