import React from "react";
import classes from './sidebar.module.scss';
import { LuHome } from "react-icons/lu";
import { GoBriefcase } from "react-icons/go";
import { MdOutlinePerson2 } from "react-icons/md";
import { BsArrowBarLeft } from "react-icons/bs";
import { MdAccessTime } from "react-icons/md";
import { IoFolderOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import Item from "../sidebar_item/item";

interface Data{
    icon: any;
    name: string;
}

const itemsDetails: Data[] = [
    {
        icon: <LuHome/>,
        name: "Dashboard",
    },
    {
        icon: <GoBriefcase/>,
        name: "Job Desk",
    }
    ,
    {
        icon: <BsArrowBarLeft/>,
        name: "Leave",
    },
    {
        icon: <MdAccessTime/>,
        name: "Attendance",
    },
    {
        icon: <FiSettings/>,
        name: "Setting",
    },

];


function Sidebar(){
    return (
        <div className="min-h-screen w-fit bg-[#F5F5F5] overflow-hidden">
            {itemsDetails.map((item,index)=>{
                return <Item key={index} props={item}/>
            })}
        </div>
    )
}

export default Sidebar;