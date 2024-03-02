import React from "react";
import { BlueButton,WhiteButton } from "src/components/buttons/button";

function Header(){
    return (
        <div className="w-full h-[65px] content-header flex justify-center items-center px-8 py-4 bg-[#F5F5F5]">
            <div className="w-full content-container flex justify-between items-center">
                <p className="font-semibold">Dashboard</p>
                <div className="header-buttons flex items-center gap-2">
                    <BlueButton value="+ Buddy punching" type= "button" />
                    <WhiteButton value="Manager POV" type= "button"/> 
                </div>
            </div>
        </div>
    )
}

export default Header;

