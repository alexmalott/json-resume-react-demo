import React, {Component} from "react";
import {dateString, arrayToList} from "./Utilities";

class Education extends Component {
    constructor(props){
        super(props);
        this.institutions = this.institutions.bind(this);
    }

    institution(institution){
        return(
            <div className="card-body card-text">
                <h5 className="row">
                    <div className="col-md">
                        {institution.institution}
                    </div>
                    <div className="col-md text-md-center">
                        {institution.studyType} of {institution.area}
                    </div>
                    <div className="col-md text-md-right text-muted">
                        ({dateString(institution.startDate)} - {dateString(institution.endDate)})
                    </div>
                </h5>
                {arrayToList(institution.courses)}
            </div>
        )
    }

    institutions(){
        let content = [];

        for (let i = 0; i < this.props.items.length; i++){
            if( i > 0 ){
                content.push( <hr/> )
            }
            content.push( this.institution( this.props.items[i] ) )
        }

        return (
            content
        )
    }

    render(){
        return (
        <div className="card">
            <h3 className="card-header">
                <i className="fa fa-graduation-cap"/> Education
            </h3>
            {this.institutions()}
        </div>
        )
    }
}

export default Education;