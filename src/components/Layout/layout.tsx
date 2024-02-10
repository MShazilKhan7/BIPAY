import React from "react";
import TopNavbar from "../topNavbar/topNavbar";
import Item from "../sidebar_item/item";
import { LuHome } from "react-icons/lu";
import Sidebar from '../sidebar/sidebar';
import DashboadContent from "../Dashboard/content/db_content";
interface Data {
    icon: any;
    name: string;
  }
  
  const item1: Data = {
    icon: <LuHome/>,
    name: "Dashboard"
  }
  
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