import React from 'react';
import SideNav from './sidenav';
import TopNav from './topnav'; 
import Table from './table'; 

function MainPage() {
    return (
        <div id="wrapper">
            <SideNav/>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopNav/>
                    <div class="container-fluid">
                        <Table/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;