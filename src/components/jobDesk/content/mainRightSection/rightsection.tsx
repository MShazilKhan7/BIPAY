import React from "react";
import JdNavbar from "../jobDeskNavbar/jd_navbar";
import Allowance from "../allowance/allowance";
import { Outlet } from "react-router-dom";



function RightSection():any {
    return(
        <>
            <div className="jd-right-section w-full pl-4 pr-8 py-4">
                <div className="jd-content-container flex flex-col gap-6 rounded-md bg-white">
                    {/* header of job desk */}
                    <JdNavbar/>
                     <div className="w-full px-8 py-4">
                        <Outlet/>
                        {/* outlet ?}
                        {/* content changes on url allowance, attendace etc. */}
                        {/* <Allowance/> */}
                     </div> 
                </div>
            </div>
        </>
    )
    
}

export default RightSection;