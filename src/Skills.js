import React from "react";
import {Badge, Progress} from "reactstrap"
import Panel from "./Panel";

class Skills extends Panel {
    icon = "fa-compass";
    title = "Skills";

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
            <Progress value={val} color={color}/>
        )
    }

    labelArray(array, preKey){
        let content = [];

        for (let i = 0; i < array.length; i++){
            content.push( <Badge className="mr-1" color="secondary" key={preKey + "-" + i}>{array[i]}</Badge> )
        }

        return (
            content
        )
    }

    itemMethod(item, key){
        return(
            <div className="card-body card-text" key={"Skl" + key}>
                <h5 className="row">
                    <div className="col-md">
                        {item.name}
                    </div>
                    <div className="col-md text-md-right text-muted">
                        {item.level}
                    </div>
                </h5>
                {this.skillBar(item.level)}
                {this.labelArray(item.keywords, "Skl" + key)}
            </div>
        )
    }
}

export default Skills;