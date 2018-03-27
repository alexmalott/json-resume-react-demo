import React, {Component} from "react";
import {dateString, arrayToList} from "./Utilities"

class Work extends Component {
    constructor(props){
        super(props);
        this.jobs = this.jobs.bind(this);
    }

    job(job){
        return(
            <div className="card-body card-text">
                <h5 className="row">
                    <div className="col-md">
                        {job.position}
                    </div>
                    <div className="col-md text-md-center">
                        <a className="float" href={job.website}>{job.company}</a>
                    </div>
                    <div className="col-md text-md-right text-muted">
                        ({dateString(job.startDate)} - {dateString(job.endDate)})
                    </div>
                </h5>
                {job.summary}
                {arrayToList(job.highlights)}
            </div>
        )
    }

    jobs(){
        let content = [];

        for (let i = 0; i < this.props.items.length; i++){
            if( i > 0 ){
                content.push( <hr/> )
            }
            content.push( this.job( this.props.items[i] ) )
        }

        return (
            content
        )
    }

    render() {
        return (
            <div className="card">
                <h3 className="card-header">
                    <i className="fa fa-briefcase"/> Experience
                </h3>
                {this.jobs()}
            </div>
        );
    }
}

export default Work;