import React from "react";
import Panel from "./Panel";

class Skills extends Panel {
    icon = "fa-compass";
    title = "Skills";
    prefix = "Skl";

    skillBar(level) {
        let val;
        let color;
        if (level === "Beginner") {
            val = "25";
            color = "danger"
        }
        else if (level === "Intermediate") {
            val = "50";
            color = "warning"
        }
        else if (level === "Advanced") {
            val = "75";
            color = "info"
        }
        else if (level === "Master") {
            val = "100";
            color = "success"
        }
        else {
            return
        }
        return(
            <div className="progress">
                <div className={"progress-bar w-" + val + " bg-" + color}/>
            </div>
        )
    }

    labelArray(array, preKey){
        let content = [];

        for (let i = 0; i < array.length; i++){
            content.push( <div className="badge badge-secondary mr-1" key={preKey + "-" + i}>{array[i]}</div> )
        }

        return (
            content
        )
    }

    itemMethod(item, key){
        return(
            <div className="card-body card-text" key={key}>
                <h5 className="row">
                    <div className="col-md">
                        {item.name}
                    </div>
                    <div className="col-md text-md-right text-muted">
                        {item.level}
                    </div>
                </h5>
                {this.skillBar(item.level)}
                {this.labelArray(item.keywords, key)}
            </div>
        )
    }
}

export default Skills;