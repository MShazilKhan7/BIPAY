import React from "react";
import { profileData } from "../profile";


function ProfileItem(data:profileData):any{
    return(
        <div className="profile-item flex items-center gap-4">
            <div className="flex items-center justify-center w-[34px] h-[34px] bg-[#F5F5F5] px-2 py-2 rounded-sm">{data.icon}</div>
            <div className="flex flex-col gap-1">
                <p className="font-semibold text-sm">{data.subheading1}</p>
                <p className="text-[12px]">{data.subheading2}</p>
            </div>
        </div>
    )
}
export default ProfileItem;