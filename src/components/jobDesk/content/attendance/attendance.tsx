import React from "react";
import Bar from "./attendanceBar/bar";
import {combineClasses} from 'src/utils/utils';
import styles from './attendance.module.scss';
import Table from "../tableComponent/table";

interface barData{
    height: string;
    days: string;
    type: string;
}

interface barData{
    height: string;
    days: string;
    type: string;
}
interface hoursInfo{
   time: string;
   text: string; 
   color: string; 
}

let barsData:barData[]=[
    {
        height: 'h-full w-1/4',
        days: '23 days',
        type: 'Regular'
    },
    {
        height: 'h-4/5 w-1/4 border-l-0',
        days: '16 days',
        type: 'Early'
    },
    {
        height: 'h-2/5 w-1/4 border-l-0',
        days: '12 days',
        type: 'Late'
    },
    {
        height: 'h-1/3 w-1/4 border-l-0',
        days: '10 days',
        type: 'Leave'
    },
]
let hoursdata:hoursInfo[]=[
    {
        time:"152:00:00",
        text: "Total schedule hour",
        color: " "
    },
    {
        time:"00:00:00",
        text: "Leave hour",
        color: ""
    },
    {
        time:"97.89",
        text: "Total work availability",
        color: "#146ADC"

    },  
    {
        time:"456 hour",
        text: "Total active hour",
        color: "#0A7E22"
    },
    {
        time: "-52 hour",
        text: "Balance",
        color:"#FD314D"
    },
    {
        time: "Early",
        text: "Average Behaviour",
        color: ""
    }
]

interface tabletype{
    tableHeader:  string[];
    tableData:    any[];
}

let tableDetails : tabletype;
tableDetails = {
    tableHeader : ["date","punched in", "In Geolocation", "Punched Out","Out Geolocation","Behavior","Type"],
    tableData : [
        {
            date:'16/08/2013',
            punchedIn: '16/08/2013',
            inGeolocation: 'Germany',
            punchedOut : '18/09/2016',
            outGeolocation: 'Vietnam',
            behavior: 'Late',
            type: 'Full Amount'
        },
        {
            date:'16/08/2013',
            punchedIn: '16/08/2013',
            inGeolocation: 'Germany',
            punchedOut : '18/09/2016',
            outGeolocation: 'Vietnam',
            behavior: 'Late',
            type: 'Full Amount'
        },
        {
            date:'16/08/2013',
            punchedIn: '16/08/2013',
            inGeolocation: 'Germany',
            punchedOut : '18/09/2016',
            outGeolocation: 'Vietnam',
            behavior: 'Late',
            type: 'Full Amount'
        }
    ]

}

function Attendance():any{
    return(
        <div className="attendance w-full flex flex-col gap-6">
            <div className="flex justify-between items-center h-6">
                <div className="text"><p className="font-bold">Attendance</p></div>
                <div className="text"><p>Calender</p></div>
            </div>
            <div className="w-full bars flex h-60 items-end">
                {barsData.map((d)=>{
                    return <Bar data={d}/>
                })}
            </div>
            <div className="w-full px-6 py-4 flex justify-center gap-4 border border-[#DDDDDD] rounded-md relative">
              {hoursdata.map((d,index)=>{
                return (  
                <div key={index} className={combineClasses(styles.hourContainer, "flex flex-col gap-1")}>
                    <p className={`font-semibold text-[${d.color}]`}>{d.time}</p>
                    <p className="text-xs opacity-80">{d.text}</p>
                </div>
                )
              })}
              
            </div>

            <div className="w-full">
                <Table details={tableDetails}/>
            </div>
        </div>
    )
}

export default Attendance;