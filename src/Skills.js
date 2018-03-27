import React, {Component} from "react";
import {Badge, Progress} from "reactstrap"

class Skills extends Component {
    constructor(props){
        super(props);
        this.skills = this.skills.bind(this);
    }

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

    labelArray(array){
        let content = [];

        for (let i = 0; i < array.length; i++){
            content.push( <Badge className="mr-1" color="secondary">{array[i]}</Badge> )
        }

        return (
            content
        )
    }

    skill(skill){
        return(
            <div className="card-body card-text">
                <h5 className="row">
                    <div className="col-md">
                        {skill.name}
                    </div>
                    <div className="col-md text-md-right text-muted">
                        {skill.level}
                    </div>
                </h5>
                {this.skillBar(skill.level)}
                {this.labelArray(skill.keywords)}
            </div>
        )
    }

    skills(){
        let content = [];

        for (let i = 0; i < this.props.items.length; i++){
            if( i > 0 ){
                content.push( <hr/> )
            }
            content.push( this.skill( this.props.items[i] ) )
        }

        return (
            content
        )
    }

    render() {
        return (
            <div className="card">
                <h3 className="card-header">
                    <i className="fa fa-compass"/> Skills
                </h3>
                {this.skills()}
            </div>
        );
    }
}

export default Skills;