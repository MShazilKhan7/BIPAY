import React from "react";



function Header():any{
    return (
        <div className="jd-header w-full h-[94px] px-8 py-4 flex flex-col gap-2">
            <p>Job Desk <span>v</span>Allowance</p> 
            <div className="flex justify-between items-center">
                <p className="font-bold text-xl">Job Desk</p>
                <button className="px-4 py-2 flex gap-1 bg-[#212143] text-white rounded-md"><span>+</span><span>Action</span></button>
            </div>
        </div>
    )
}

export default Header;