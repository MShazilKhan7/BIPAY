import React from "react";
import classes from './sidebar.module.scss';
import { LuContact, LuHome } from "react-icons/lu";
import { GoBriefcase } from "react-icons/go";
import { MdOutlinePerson2 } from "react-icons/md";
import { BsArrowBarLeft } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import Item from "../sidebar_item/item";
import { hoveritems } from "../sidebar_item/hoveritem/hoveritem";

interface Data{
    icon: any;
    name: string;
    path: any;
    dropdown: boolean;
    hoveritems: hoveritems[];
}

const itemsDetails: Data[] = [
    {
        icon: <LuHome/>,
        name: "Dashboard",
        path: 'dashboard/',
        dropdown: false,
        hoveritems : []
    },
    {
        icon: <GoBriefcase/>,
        name: "Job Desk",
        path: 'jobdesk/',
        dropdown: false,
        hoveritems : []
    },
    {
        icon: <LuContact/>,
        name: "Employees",
        path: 'employees/',
        dropdown: true,
        hoveritems : [
        {
            itemname: "All Employees",
            path :"employees/"
        },
        {
            itemname: "Appointment",
            path :"employees/"
        }
        ]
    },
    {
        icon: <BsArrowBarLeft/>,
        name: "Leave",
        path: 'dashboard/',
        dropdown: false,
        hoveritems : []

    },
    {
        icon: <MdAccessTime/>,
        name: "Attendance",
        path: 'dashboard/',
        dropdown: false,
        hoveritems : []

    },
    {
        icon: <FiSettings/>,
        name: "Setting",
        path: 'dashboard/',
        dropdown: false,
        hoveritems : []

    },

];

function Sidebar(){
    return (
        <div className="min-h-screen w-fit border border-[#E0E0E0] bg-[#F5F5F5] overflow-hidden">
            {itemsDetails.map((item,index)=>{
                return <Item key={index} props={item}/>
            })}
        </div>
    )
}

export default Sidebar;