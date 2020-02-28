import React from "react";
import {dateString} from "./Utilities";
import Panel from "./Panel";

class Publications extends Panel {
    icon = "fa-book";
    title = "Publications";
    prefix = "Pub";

    itemMethod(item, key){
        key = this.prefix + key;
        return(
            <div className="card-body card-text" key={key}>
                <h5 className="row">
                    <div className="col-md">
                        {item.publisher}
                    </div>
                    <a href={item.website} className="col-md text-md-center">
                        {item.name}
                    </a>
                    <div className="col-md text-md-right text-muted">
                        {dateString(item.releaseDate)}
                    </div>
                </h5>
                {item.summary}
            </div>
        )
    }
}

export default Publications;