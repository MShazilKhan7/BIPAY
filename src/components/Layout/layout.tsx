import React from "react";
import TopNavbar from "../topNavbar/topNavbar";
import Sidebar from '../sidebar/sidebar';
import DashboadContent from "../Dashboard/content/db_content";


function Layout(){
    return (
        // main screen
        <div className="main"> 
            {/* top navbar */}
            <TopNavbar/>
            <div className="contents flex">
                <div className="left-section">
                    {/* sidebar */}
                    <Sidebar/>
                </div>
                <div className="right-section">
                    {/* content  */}
                    <DashboadContent/>
                </div>
            </div>
        </div>
    )
}

export default Layout;