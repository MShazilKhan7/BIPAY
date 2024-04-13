import React, { useEffect, useRef,useState } from "react";
import Allowance from "../allowance/allowance";
import Attendance from "../attendance/attendance";
import { NavLink } from "react-router-dom";
interface navItem{
    name: string;
    tabValue: number;
}

let navItems : navItem[] = [
    {
        name: "Allowance",
        tabValue: 0,
        
    },
    {
        name: "Attendance",
        tabValue: 1,
    },
    {
        name: "Leave",
        tabValue: 2,
    },
    {
        name: "Folder",
        tabValue: 3,


    },
    {
        name: "Assets",
        tabValue: 4,


    },
    {
        name: "History",
        tabValue: 5,

    },
    {
        name: "Salary",
        tabValue: 6,
    },
    {
        name: "Pay run",
        tabValue: 7,
    },
    {
        name: "Slip",
        tabValue: 8,
    },
    {
        name: "Address",
        tabValue: 9,

    },
    {
        name: "Contacts",
        tabValue: 10,
    },
    {
        name: "Socials",
        tabValue: 11,
    }
    ,
    {
        name: "Socials",
        tabValue: 12,
    }
    ,
    {
        name: "Socials",
        tabValue: 12,

    }
    ,
    {
        name: "Socials",
        tabValue: 13,

    }
]


const JobDeskRightSection: React.FC = ()=>{
    const [tabValue, setTabValue] = useState<number>(0)

    const handleTabChange = (value:number)=>{
        setTabValue(value)
    }
    return(
        <>
            <div className="jd-right-section w-full pl-4 pr-8 py-4">
                <div className="jd-content-container flex flex-col gap-6 rounded-md bg-white">
                    <div className="nested-navbar w-full h-[37px] px-2">
                        <div  className="jd-nav-items flex items-center gap-3 w-full overflow-x-auto">
                            {navItems.map((item, index) => (
                                <div key={index} className="py-2">
                                    <NavLink to='' onClick={()=>handleTabChange(item.tabValue)} key={index} className="text-md whitespace-nowrap">{item.name}</NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="w-full px-8 py-4">
                        {tabValue===0 && <Allowance/>}
                        {tabValue===1 && <Attendance/>}

                        {/* outlet ?}
                        {/* content changes on url allowance, attendace etc. */}
                        {/* <Allowance/> */}
                     </div> 
                </div>
            </div>
        </>
    )
    
}

export default JobDeskRightSection;