import React from 'react';
import {Link} from 'react-router-dom';

function Navprofile(props) {
  
  return (
        <li className="nav-item dropdown no-arrow">
        <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">{props.name}</span>
          <img className="img-profile rounded-circle" src={
            props.name && `https://ui-avatars.com/api/?name=${props.name}&&background=0D8ABC&color=fff&&size=250`
          }/>
        </Link>
        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          <Link className="dropdown-item" to="/app/profile">Profile</Link>
          <Link className="dropdown-item" to="/app/settings">Settings</Link>
          <Link className="dropdown-item" to="/app/activitylog">Activity Log</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/app/logout">Logout</Link>
        </div>
      </li>
    )
}
export default Navprofile;