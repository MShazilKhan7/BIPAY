import React from "react";
import styles from './table.module.scss'
import {combineClasses} from 'src/utils/utils';

/*
required data like
{
    tableHeader : ['col_1_header', 'col_2_header', 'col_3_header']
    tableData   : [{},{},{}]     
}
*/
function Table({details}:any):any{
    return(
        <div className="w-full">
            <table className={combineClasses(styles.mainTable, "w-full")}> 
                <thead className = {combineClasses(styles.tableHeader,"bg-[#F5F5F5] w-full")} >
                    <tr className="w-full min-h-[42px]">
                    {details.tableHeader.map((headerdata:string,index:number)=>{
                        return (<td key={index} className={`w-[calc(100% / ${details.tableHeader.length})] px-3 py-3 text-[12px] whitespace-nowrap`}>{headerdata}</td>)
                    })}
                    </tr>
                </thead>
                {/* could be overflow auto for more data */}
                <tbody>
                    {details.tableData.map((row:any, index:number)=>{
                            console.log("I am inside the row maps")

                        return (
                            <tr key={index} className="w-full min-h-[42px]">
                                {Object.values(row).map((value:any, index:number)=>{
                                    return (
                                        <td key={index} className={`w-[calc(100% / ${details.tableHeader.length})] px-3 py-3 text-[12px] `}>
                                            {value}
                                        </td>
                                    )
                                })

                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;