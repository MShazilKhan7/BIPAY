import React from "react";
import Header from "./header/contentheader";
import Greeting from "./container/greeting";
import TrackingContainer from "./tracking/tracking_container";
import Timelog from "./timelog/timelog";
function DashboadContent():any{
    return (
        <div className="db-content overflow-auto">
            <Header/>
            <Greeting/>
            <TrackingContainer/>
            <Timelog/>
        </div>

    )
}

export default DashboadContent;