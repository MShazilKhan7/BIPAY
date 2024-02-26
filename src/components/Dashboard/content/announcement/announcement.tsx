import React from "react";
import styles from '../announcement/announcement.module.scss'
import { combineClasses }  from "src/utils/utils";
let data = [
    {
        title: "Scrum Master",
        start_data: "Dec 4, 2019 21:42",
        end_date:  "Dec 7, 2019 23:26",
        description: "corrected item alignment"
    },
    {
        title: "Scrum Master",
        start_data: "Dec 4, 2019 21:42",
        end_date:  "Dec 7, 2019 23:26",
        description: "corrected item alignment"
    } ,
    {
        title: "Scrum Master",
        start_data: "Dec 4, 2019 21:42",
        end_date:  "Dec 7, 2019 23:26",
        description: "corrected item alignment"
    },
    {
        title: "Scrum Master",
        start_data: "Dec 4, 2019 21:42",
        end_date:  "Dec 7, 2019 23:26",
        description: "corrected item alignment"
    } 
]

function Announcement():any{
    return(
        <>
        <div className="w-full announcement px-8 py-4">
            <div className="w-full data-container px-8 py-4 bg-white flex flex-col gap-6 rounded-lg">
                <p className="font-bold text-sm">Annoucement</p>
                <div className={combineClasses(styles.tablesection)}>
                    <table>
                        <thead>
                            <tr>
                                <td>title</td>
                                <td>start date</td>
                                <td>End date</td>
                                <td>description</td>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((d,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{d.title}</td>
                                    <td>{d.start_data}</td>
                                    <td>{d.end_date}</td>
                                    <td>{d.description}</td>
                                </tr>
                            ) 
                        })}
                        </tbody>
                    </table>
                </div>
            </div>  
        </div>
        </>
    )
}
export default Announcement;