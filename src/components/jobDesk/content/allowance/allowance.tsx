import React from "react";
import Policy from "./policy/policy";
import PaidBar from "./paidBarComponent/paidBar";


function Allowance():any{
    return (
        <div className="allowance w-full flex flex-col gap-6">
            {/* allowance policy */}
            <Policy/>
            <div className="flex gap-4 w-full">
            {/* payment */}
            <PaidBar data={{heading: "paid"}}/>
            <PaidBar data={{heading: "Unpaid"}}/>
            <PaidBar data={{heading: "paid casual"}}/>
            <PaidBar data={{heading: "paid slick"}}/>
            </div>
        </div>
    )
}

export default Allowance;