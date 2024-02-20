import React from "react";
import { CiWarning } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

function Policy():any{
    return (
        <div className="policy w-full p-4 flex rounded-md border justify-between items-start border-[#F0B732] bg-[#FCF1D6]">
            <div><CiWarning className="mt-1 text-[#F0B732] font-bold"/></div>
            <div className="text-container flex flex-col gap-2 flex-grow-[1] ">
                <p className="text-md font-bold">Allowance Policy</p>
                <div className="text-2">
                    <p className="text-sm">1. Leave will start from the month of January</p>
                    <p className="text-sm">2. Any type of change will be effective on the next day.</p>
                </div>
            </div>
            <div>
            <IoCloseSharp className="text-[#F0B732]"/>
            </div>
        </div>
    )
}

export default Policy;