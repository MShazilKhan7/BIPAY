import React from "react";
import ProfileItem from "./profile_item/profile_item";
import { TbDeviceIpadMinus } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { CiCalendarDate, CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";


export interface profileData{
    subheading1:String;
    subheading2:String;
    icon: any;
}

let topHeader:profileData = {
        subheading1: "Kimi Räikkönen",
        subheading2: "UX Designer",
        icon: <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
}

let mydata : profileData[] = [
    {
       
        subheading1: "Admin & HRM",
        subheading2: "Department",
        icon: <TbDeviceIpadMinus/>
    },
    {
        subheading1: "40,000",
        subheading2: "Salary",
        icon: <IoWalletOutline/>
    },
    {
        subheading1: "Regular",
        subheading2: "Work Shift",
        icon: <IoMdTime/>
    },
    {
        subheading1: "12 February 2023",
        subheading2: "Joining date",
        icon: <CiCalendarDate/>
    }
]
let Contact: profileData[] = [
    {
        subheading1: "Email",
        subheading2: "alwissuryatmaja@gmail.com",
        icon: <CiMail/>
    },
    {
        subheading1: "Phone",
        subheading2: "+923181188209",
        icon: <CiPhone/>
    },
    {
        subheading1: "Website",
        subheading2: "mshazilkhan.netlify.app",
        icon: <TbWorld/>
    }
]
function Profile():any{
    return(
        <>
        <div className="profile w-full py-4 pl-8 pr-4">
            <div className="profile-content px-8 py-4 flex flex-col gap-8 bg-white rounded-lg">
                <ProfileItem {...topHeader}/>
                <div className="flex flex-col gap-4">
                    <p className="font-semibold">Info</p>
                    <div className="flex flex-col gap-6">
                        {mydata.map((d)=>{
                            return <ProfileItem {...d}/>
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-semibold">Contact</p>
                    <div className="flex flex-col gap-6">
                        {Contact.map((d)=>{
                            return <ProfileItem {...d}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;