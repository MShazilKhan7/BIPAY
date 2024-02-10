import React from "react";


function Header(){
    return (
        <div className="w-full h-[65px] content-header flex justify-center items-center px-8 py-4 bg-[#F5F5F5]">
            <div className="w-full content-container flex justify-between items-center">
                <p className="font-semibold">Dashboard</p>
                <div className="header-buttons flex items-center gap-2">
                    <button className="rounded-md text-white px-4 py-[6px] bg-[#212143]">+ Buddy punching</button>
                    <button className="flex items-center rounded-md px-4 py-[6px] text-black border-[1.5px] border-[#E0E0E0] bg-white text-center">Manager POV</button>
                </div>
            </div>
        </div>
    )
}

export default Header;

