import React from 'react';
import Notification from './notification';
import NavProfile from './navprofile';

function topnav() {
    return (
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>
          <ul class="navbar-nav ml-auto">
            <Notification/>
            <div class="topbar-divider d-none d-sm-block"></div>
            <NavProfile/>
          </ul>
</nav>
    )
}
export default topnav;