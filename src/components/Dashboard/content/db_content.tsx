import React from "react";
import Header from "./header/contentheader";
import Greeting from "./container/greeting";
import TrackingContainer from "./tracking/tracking_container";
import Timelog from "./timelog/timelog";
import Announcement from "./announcement/announcement";

function DashboadContent():any{
    return (
        <div className="db-content overflow-auto">
            <Header/>
            <Greeting/>
            <TrackingContainer/>
            <Timelog/>
            <Announcement/>
        </div>

    )
}

export default DashboadContent;