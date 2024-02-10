import React from "react";
import Header from "./header/contentheader";
import Greeting from "./container/greeting";
import TrackingContainer from "./tracking/tracking_container";
function DashboadContent():any{
    return (
        <div className="db-content bg-blue-400">
            <Header/>
            <Greeting/>
            <TrackingContainer/>
        </div>

    )
}

export default DashboadContent;