import React from "react";
import { BsArrowBarLeft } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";



function Greeting():any{
    return (

        <div className="w-full px-8 bg-[#F5F5F5] py-4 greeting h-24">
            <div className="greeting-container px-4 py-2 w-full bg-white rounded-lg">
                <div className="title flex justify-between items-center"> 
                    <div className="h-full heading flex items-start  flex-col gap-1">
                        <div className="text-[16px] font-semibold">Good to see you, Kimi 👋</div>
                        <div className="text-sm opacity-75">You came 15 minutes early today</div>
                    </div>
                    <div className="punch-time flex gap-8 w-56 h-[37px]">
                        <div className="left flex w-1/2 gap-2">
                            <div className="icon flex items-center  rounded-md justify-center w-9 h-9 bg-[#CEE5D3]">
                                <BsArrowBarLeft className="text-[#0A7E22] text-2xl"/>
                            </div>
                            <div className="time flex flex-col gap-[1px]">
                                <p className="text-[12px] font-semibold">7:14 AM</p>
                                <p className="text-[11px] opacity-75">Punch in</p>
                            </div>
                        </div>
                        <div className="right flex w-1/2 gap-2">
                            <div className="flex items-center justify-center rounded-md icon w-9 h-9 bg-[#FFD6DB]">
                                <BsArrowBarRight className="text-[#FD314D]  text-2xl"/>
                            </div>
                            <div className="time flex flex-col gap-[1px]">
                                <p className="text-[12px] font-semibold">5:00 PM</p>
                                <p className="text-[11px] opacity-75">Punch Out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}


export default Greeting;