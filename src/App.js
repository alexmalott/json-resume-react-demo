import React, { Component } from 'react';
import Resume from './Resume'
import Basics from './Basics'
import Work from './Work'
import Education from './Education'
import Skills from './Skills'
import Volunteer from './Volunteer'
import Publications from "./Publications";
import Awards from "./Awards";

class App extends Component {
    componentDidMount(){
        document.title = Resume.basics.name
    }

    render() {
        return (
            <div className="container-fluid">
                <Basics items={Resume.basics}/>
                <div className="row d-print-inline">
                    <div className="col-12 col-xl-6">
                        <Work items={Resume.work}/>
                    </div>
                    <br/>
                    <div className="col-12 col-xl-6">
                        <Skills items={Resume.skills}/>
                    </div>
                    <br/>
                    <div className="col-12 col-xl-6">
                        <Education items={Resume.education}/>
                    </div>
                    <br/>
                    <div className="col-12 col-xl-6">
                        <Volunteer items={Resume.volunteer}/>
                    </div>
                    <br/>
                    <div className="col-12 col-xl-6">
                        <Publications items={Resume.publications}/>
                    </div>
                    <br/>
                    <div className="col-12 col-xl-6">
                        <Awards items={Resume.awards}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
