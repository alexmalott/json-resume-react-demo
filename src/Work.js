import React from "react";
import {dateString, arrayToList} from "./Utilities"
import Panel from "./Panel";

class Work extends Panel {
    icon = "fa-briefcase";
    title = "Experience";
    prefix = "Job";

    itemMethod(item, key){
        return(
            <div className="card-body card-text" key={key}>
                <h5 className="row">
                    <div className="col-md">
                        {item.position}
                    </div>
                    <div className="col-md text-md-center">
                        <a className="float" href={item.website}>{item.company}</a>
                    </div>
                    <div className="col-md text-md-right text-muted">
                        ({dateString(item.startDate)} - {dateString(item.endDate)})
                    </div>
                </h5>
                {item.summary}
                {arrayToList(item.highlights, key)}
            </div>
        )
    }
}

export default Work;