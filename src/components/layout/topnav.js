import React from 'react';
import Notification from '../elements/notification';
import NavProfile from './navprofile';

function topnav() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          </button>
          <ul className="navbar-nav ml-auto">
            <Notification/>
            <div className="topbar-divider d-none d-sm-block"></div>
            <NavProfile/>
          </ul>
</nav>
    )
}
export default topnav;