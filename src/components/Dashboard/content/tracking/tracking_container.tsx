import React from "react";
import TrackingItem from "./trackingitem/item"

interface trackingItems {
    heading: string;
    numbers: number;
    paid   : number;
    unpaid : number;
} 

// array of object( interfaces )
const items : trackingItems[] = [
    {
        heading: "Total Leave Allowance",
        numbers: 34,
        paid: 11,
        unpaid: 4,
    },
    {
        heading: "Total Leave Taken",
        numbers: 20,
        paid: 62,
        unpaid: 76,
    },
    {
        heading: "Total Leave Avalaible",
        numbers: 87,
        paid: 50,
        unpaid: 51,
    },
    {
        heading: "Leave Request Pending",
        numbers: 122,
        paid: 60,
        unpaid: 53,
    },
]
function TrackingContainer() {
    return(
        <div className="tracking w-full px-8 py-4 flex bg-[#F5F5F5]">
            <div className="continer w-full px-8 py-4 flex bg-white rounded-lg gap-7">
                {items.map((item)=>{
                    return (
                        <TrackingItem data = {item}/>
                    )
                })}
            </div>
        </div>
    )
    
}

export default TrackingContainer;