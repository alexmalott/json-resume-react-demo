import React from "react";
import {dateString, arrayToList} from "./Utilities"
import Panel from "./Panel";

class Volunteer extends Panel {
    icon = "fa-handshake-o";
    title = "Volunteering";

    itemMethod(item, key){
        return(
            <div className="card-body card-text" key={"Vol" + key}>
                <h5 className="row">
                    <div className="col-md">
                        {item.position}
                    </div>
                    <div className="col-md text-md-center">
                        <a className="float" href={item.website}>{item.organization}</a>
                    </div>
                    <div className="col-md text-md-right text-muted">
                        ({dateString(item.startDate)} - {dateString(item.endDate)})
                    </div>
                </h5>
                {item.summary}
                {arrayToList(item.highlights, "Vol" + key)}
            </div>
        )
    }
}

export default Volunteer;