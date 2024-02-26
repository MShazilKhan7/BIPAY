import React from "react";
import { Link } from "react-router-dom";
export interface hoveritems{
    itemname:string;
    path: string;
}

function HoverItem({data}:any):any {

    console.log("i am data",data);
    return (

        <div className="flex flex-col gap-1 w-full px-1 py-2">   
            {data.map((item:hoveritems, index:number)=>{
                return (
                    <div key={index} className="flex items-center px-3 py-1 rounded-md hover:bg-[#D3D3D9]">
                        <Link to={item.path} className="text-sm">{item.itemname}</Link>
                    </div>  
                )
            })}
        </div>
    )}
export default HoverItem;