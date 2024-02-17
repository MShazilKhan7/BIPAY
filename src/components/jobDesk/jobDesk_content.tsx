import React from "react";
import Header from "./content/header/job_desk_header";
import Profile from "./content/highlightProfile/profile";

function JobDesk(){
    return (
        <>
        <Header/>
        <div className="jd-bottom flex w-full h-[756px]">
            <div className="jd-left-section w-[29%] h-full">
                {/* highlight profile section */}
                <Profile/>
            </div>
            <div className="jd-right-section h-full w-[71%] bg-slate-400">
                {/* right section */}
            </div>
        </div>
        </>
    )
}

export default JobDesk;