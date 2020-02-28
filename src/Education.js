import React from "react";
import {dateString, arrayToList} from "./Utilities";
import Panel from "./Panel";

class Education extends Panel {
    icon = "fa-graduation-cap";
    title = "Education";
    prefix = "Edu";

    itemMethod(item, key){
        key = this.prefix + key;
        return(
            <div className="card-body card-text" key={key}>
                <h5 className="row">
                    <div className="col-md">
                        {item.institution}
                    </div>
                    <div className="col-md text-md-center">
                        {item.studyType} of {item.area}
                    </div>
                    <div className="col-md text-md-right text-muted">
                        ({dateString(item.startDate)} - {dateString(item.endDate)})
                    </div>
                </h5>
                {arrayToList(item.courses, key)}
            </div>
        )
    }
}

export default Education;