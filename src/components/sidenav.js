import React from 'react'

function sidenav() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-bus"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Super Admin</div>
            </a>
            <hr className="sidebar-divider my-0"/>
            <li className="nav-item active">
            <a className="nav-link" href="/">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Dashboard</span></a>
            </li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">Management</div>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-user"></i>
                    <span>Account Management</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                    <a className="collapse-item" href="/admin-management">Admin</a>
                    <a className="collapse-item" href="/driver-management">Driver</a>
                    <a className="collapse-item" href="/student-management">Student</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/bus-management">
                <i class="fas fa-fw fa-bus"></i><span>Bus Management</span>
                </a>
            </li>
        </ul>
    
    )
}
export default sidenav;