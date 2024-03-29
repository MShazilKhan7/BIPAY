import React from "react";
import { BlueButton } from "src/components/buttons/button";


function Header():any{
    return (
        <div className="jd-header w-full h-[94px] px-8 py-4 flex flex-col gap-2">
            <p>Job Desk <span>v</span>Allowance</p> 
            <div className="flex justify-between items-center">
                <p className="font-bold text-xl">Job Desk</p>
                <BlueButton value="+ Action"/>
            </div>
        </div>
    )
}

export default Header;