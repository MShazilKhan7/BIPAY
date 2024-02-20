import React from "react";



function Bar({data}:any):any{
    return (
        <div className={`bar ${data.height} flex  border-2 border-[#146ADC] bg-[#D0E1F8] rounded-md rounded-b-none border-b-0 py-4 pl-8 pr-4`}> 
            <div className="flex flex-col gap-2">
                <p className="font-bold text-[#146ADC]">{data.days}</p>
                <p className="text-[#146ADC] text-sm">{data.type}</p>
            </div>
        </div>
    )
}

export default Bar;