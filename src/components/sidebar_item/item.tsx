import React from "react";
import { Link } from "react-router-dom";



function Item({props}:any) {
    return(
        <div className="item flex items-center  w-[240px] px-3 py-4 h-[45px] bg-[#F5F5F5] hover:bg-[#e0e0e0]">
            <Link  className="flex items-center justify-center gap-3 text-sm" to={'/'}>
                <div className="text-[#404040] leading-4 text-[18px]">{props.icon}</div>
                <div className="text-[#212143]">{props.name}</div>
            </Link>
        </div>
    )
}

export default Item;