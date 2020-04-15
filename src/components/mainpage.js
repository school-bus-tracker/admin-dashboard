import React from 'react';
import SideNav from './sidenav';
import TopNav from './topnav'; 

function MainPage() {
    return (
        <div id="wrapper">
            <SideNav/>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopNav/>
                    <div class="container-fluid">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;