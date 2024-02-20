import { combineClasses } from "src/utils/utils";
import React from "react";
import style from './paid.module.scss'

function PaidBar({data}:any):any {
    return(
        <>
            <div className={combineClasses(style.paidBar, "w-1/4 px-6 py-4 flex flex-col gap-4 rounded-md border-[1.5px] border-[#EDEDED]")}>
                <div>
                    <p className="text-lg font-semibold">{data.heading}</p>
                </div>
                <div>
                    <p>Paid</p>
                    <p className="opacity-60">Type</p>     
                </div>
                <div>
                    <p>07.00</p>
                    <p className="opacity-60">Allowance</p> 
                </div>
                <div>
                    <p>$21,000</p>
                    <p className="opacity-60">Earned</p> 
                </div>
                <div>
                    <p>$3</p>
                    <p className="opacity-60">Taken</p> 
                </div>
                <div>
                    <p>$5</p>
                    <p className="opacity-60">Availability</p> 
                </div>
            </div>
        </>
    )
    
}

export default PaidBar;