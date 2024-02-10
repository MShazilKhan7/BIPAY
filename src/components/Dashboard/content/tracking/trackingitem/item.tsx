import { traceDeprecation } from "process";
import React from "react";
import styles from './item.module.scss'
import { combineClasses }  from "src/utils/utils";
function TrackingItem({data}:any) : any{
    return (
        <div className={combineClasses(styles.trackingitem,"trackingitem w-[205.5px] flex flex-col gap-2 bg-white")}
            >
            <div className="top w-full text-base font-semibold"><p>{data.heading}</p></div>
            <div className="middle w-full"><p className="text-xl text-[#146ADC]">{data.numbers}</p></div>
            <div className="bottom w-full flex gap-6">
                <div className="text-xs flex gap-2"><span className="text-[#9E9E9E]">paid</span> <span className="text-[#1158B7]">{data.paid}</span></div>
                <div className="text-xs flex gap-2"><span className="text-[#9E9E9E]">unpaid</span> <span className="text-[#D32940]">{data.unpaid}</span></div>
            </div>
        </div>
    )
    
}
export default TrackingItem;