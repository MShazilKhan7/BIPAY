import React from "react";
import { MdOutlineLanguage } from "react-icons/md";

function TopNavbar(){
    return(
        <>
        <div className="w-full flex items-center bg-slate-800">
            <div className="logo">
                {/* <img src="" alt="" /> */}
                <h2>BIPAY</h2>
            </div>
            <div className="side-icons">
                <MdOutlineLanguage/>    
            </div>
        </div>
        </>
    )
}

export default TopNavbar;