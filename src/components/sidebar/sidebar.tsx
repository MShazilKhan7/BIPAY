import React from "react";
import classes from './sidebar.module.scss';
import { LuHome } from "react-icons/lu";
import { GoBriefcase } from "react-icons/go";
import { MdOutlinePerson2 } from "react-icons/md";
import { BsArrowBarLeft } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import Item from "../sidebar_item/item";

interface Data{
    icon: any;
    name: string;
    path: any;
}

const itemsDetails: Data[] = [
    {
        icon: <LuHome/>,
        name: "Dashboard",
        path: 'dashboard/',
    },
    {
        icon: <GoBriefcase/>,
        name: "Job Desk",
        path: 'jobdesk/',

    }
    ,
    {
        icon: <BsArrowBarLeft/>,
        name: "Leave",
        path: 'dashboard/',

    },
    {
        icon: <MdAccessTime/>,
        name: "Attendance",
        path: 'dashboard/',

    },
    {
        icon: <FiSettings/>,
        name: "Setting",
        path: 'dashboard/',

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