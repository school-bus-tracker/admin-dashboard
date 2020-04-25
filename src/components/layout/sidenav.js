import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusAlt, faChartArea, faUser, faList, faUserCheck, faSchool } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
function sidenav() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">    
                </div>
                <div className="sidebar-brand-text mx-3">Super Admin</div>
            </Link>
            <hr className="sidebar-divider my-0"/>
            <li className="nav-item active">
            <Link className="nav-link" to="/app">
            <FontAwesomeIcon icon={faChartArea} className="svg-icon"/>
                <span>Dashboard</span></Link>
            </li>
            <hr className="sidebar-divider"/>
            <li className="nav-item">
                <Link className="nav-link" to="/app/attendance">
                <FontAwesomeIcon icon={faUserCheck} className="svg-icon"/><span>Student Attendance</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/app/buslog">
                <FontAwesomeIcon icon={faList} className="svg-icon"/><span>Bus logs</span>
                </Link>
            </li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">Management</div>
            <li className="nav-item">
                <Link className="nav-link" to="/app/school">
                <FontAwesomeIcon icon={faSchool} className="svg-icon"/><span>School Management</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <FontAwesomeIcon icon={faUser} className="svg-icon"/>
                    <span>User Management</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                    <Link className="collapse-item" to="/app/admin">Admin</Link>
                    <Link className="collapse-item" to="/app/driver">Driver</Link>
                    <Link className="collapse-item" to="/app/student">Student</Link>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/app/bus">
                <FontAwesomeIcon icon={faBusAlt} className="svg-icon"/><span>Bus Management</span>
                </Link>
            </li>
        </ul>
    
    )
}
export default sidenav;