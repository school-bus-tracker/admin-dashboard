import React from 'react';

function navprofile() {
    return (
        <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">Malavika Mohanan</span>
          <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"/>
        </a>
        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
          <a className="dropdown-item" href="#">
            Profile
          </a>
          <a className="dropdown-item" href="#">
            Settings
          </a>
          <a className="dropdown-item" href="#">
            Activity Log
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
            Logout
          </a>
        </div>
      </li>
    )
}
export default navprofile;